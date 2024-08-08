<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const store= useMainStore();
const {getUserData:user}= storeToRefs(store)

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
   if(result.success===0){
    
   }
});

</script>
<template>
    <Dialog :visible="visible" modal  :style="{ width: '800px' }">
        <template #container="{ closeCallback }">
            <div class="tw-flex tw-justify-end tw-items-center tw-px-4 tw-py-1">
              
                <Button icon="pi pi-times" class="transparent-btn" />
            </div>
            <form @submit.prevent="onSubmit">
            <div class="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-4 tw-pt-10 tw-pb-20">
                <img src="/img/logo.png" alt="ic_logo" class="tw-w-[350px] tw-h-fit tw-mb-4">
                <p class="tw-text-2xl tw-text-blue tw-font-bold">Hola {{ user.name }}</p>
                <img src="/img/doctor.png" alt="doctor_img" class="tw-w-[150px]">
                <span class="tw-text-2xl tw-text-blue tw-font-bold"> Tu medico te esta esperando</span>
                
                  
                    <Button class="btn" type="submit">Conectar</Button>
              
                
            </div>
        </form>
             
    </template>
</Dialog>
</template>

