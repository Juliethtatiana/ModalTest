<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import * as yup from "yup";

const store= useMainStore();
const emit=defineEmits(['change']);

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required(`campo requerido`)
      .email('formato de email invalido'),
      name:yup
      .string()
      .required(`campo requerido`),
      surnames:yup
      .string()
      .required(`campo requerido`),
      phone:yup
      .string()
      .required(`campo requerido`),
      check:yup
      .boolean()
      .required(`campo requerido`),

  }),
});

// define variable
const { value: email } = useField("email");
const { value: phone } = useField("phone");
const { value: name } = useField("name");
const { value: surnames } = useField("surnames");
const { value: check } = useField("check");


const visible=ref(true)

const onSubmit = handleSubmit(async (values) => {
 store.userData=values
  emit('change',3)
});

</script>
<template>
    <Dialog :visible="visible" modal  :style="{ width: '800px' }">
        <template #container="{ closeCallback }">
            <div class="tw-flex tw-justify-end tw-items-center tw-px-4 tw-py-1">
                <Button icon="pi pi-times" class="transparent-btn " />
            </div>
            <form @submit.prevent="onSubmit">
            <div class="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-4 tw-pt-10 tw-pb-20">
                <img src="/img/logo.png" alt="ic_logo" class="tw-w-[350px] tw-h-fit tw-mb-4">
                <span class="tw-text-3xl tw-text-blue tw-font-bold"> Asistencia medica virtual inmediata</span>
               
                <div class="tw-w-full tw-px-28 tw-flex tw-flex-col tw-gap-4">
                    <Message severity="warn" class="tw-mb-4"> <span>Usuario no encontrado, registrese</span></Message>
                    <div > <InputText v-model="phone" placeholder="Celular" class=" tw-w-full general-input"></InputText>
                    <small class="error">{{ errors['phone'] }}</small></div>
                    <div> <InputText v-model="name" placeholder="Nombres" class=" tw-w-full general-input"></InputText>
                        <small class="error">{{ errors['name'] }}</small></div>
                        <div> <InputText v-model="surnames" placeholder="Apellidos" class=" tw-w-full general-input"></InputText>
                            <small class="error">{{ errors['surnames'] }}</small></div>
                            <div> <InputText v-model="email" placeholder="Correo electronico" class=" tw-w-full general-input"></InputText>
                                <small class="error">{{ errors['email'] }}</small></div>
                    
                </div>
                <div>
                    <div class="tw-flex tw-justify-center tw-gap-4">
        <Checkbox v-model="check" :binary="true" />
        <label for="ingredient1" class="tw-underline tw-text-blue"> Terminos y condiciones </label>
    </div>
    <small class="error">{{ errors['check'] }}</small>
         
                </div>
                       <Button class="btn" type="submit">Conectar</Button>
              

                
            </div>
        </form>
             
    </template>
</Dialog>
</template>

