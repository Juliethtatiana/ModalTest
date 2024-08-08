<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const store= useMainStore();

const emit=defineEmits(['change']);

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: yup.object({
    identification: yup
      .string()
      .required(`campo requerido`),
  }),
});

// define variable
const { value: identification } = useField("identification");

const visible=ref(true)

const onSubmit = handleSubmit(async (values) => {
 
   const result= await store.getClientData(values.identification);
   console.log(result)
   if(result.success===0){
    emit('change',2)
   }else{
    store.userData=result
    emit('change',3)

   }
});

</script>
<template>
    <Dialog :visible="visible" modal  :style="{ width: '800px' }">
        <template #container="{ closeCallback }">
            <div class="tw-flex tw-justify-between tw-items-center tw-px-4 tw-py-1">
                <img src="/img/logo.png" alt="ic_logo" class="tw-w-[250px] tw-h-fit">
                <Button icon="pi pi-times" class="transparent-btn" />
            </div>
            <form @submit.prevent="onSubmit">
            <div class="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-4 tw-pt-10 tw-pb-20">
                <img src="/img/doctor.png" alt="doctor_img" class="tw-w-[150px]">
                <span class="tw-text-2xl tw-text-blue tw-font-bold"> Asistencia medica virtual inmediata</span>
                
                    <div> <InputText v-model="identification" placeholder="Número de identificación" class="tw-max-w-[300px] tw-w-full general-input"></InputText>
                    <small class="error">{{ errors['email'] }}</small></div>
                    <Button class="btn" type="submit">Ingresar</Button>
              

                
            </div>
        </form>
             
    </template>
</Dialog>
</template>

