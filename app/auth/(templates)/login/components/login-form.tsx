"use client";
import {
  ButtonComponent,
  CheckboxComponent,
  InputComponent,
  SpinnerComponent,
} from "@/src/components";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IValidateEmailRequest,
  emailValidationSchema,
} from "@/src/lib/validations";
import { useValidateEmailMutationv2 } from "@/src/hooks/api";
import { ErrorModalLogin } from "./error-modal";

const defaultValues: IValidateEmailRequest = {
  email: "",
  remember: false,
};

export const LoginFormComponent = () => {
  const { data, mutation, errorModal, setErrorModal } = useValidateEmailMutationv2();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<IValidateEmailRequest>({
    mode: "onChange",
    defaultValues,
    resolver: zodResolver(emailValidationSchema),
  });

  const onSubmit: SubmitHandler<IValidateEmailRequest> = async (
    data: IValidateEmailRequest
  ) => {
    mutation.mutate(data);
  };

  return (
    <>
      <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
        {JSON.stringify(data)}
        <div className="flex flex-col mb-8">
          <InputComponent
            messageError={errors.email?.message}
            variant="underlined"
            value={"ricardo@gmail.com"}
            {...register("email")}
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            label="Correo electrónico"
            placeholder="Correo electrónico"
          />
        </div>

        <div className="flex mb-8 px-3">
          <CheckboxComponent
            defaultChecked={false}
            {...register("remember")}
            name="remember"
            variant="square"
            label="Recordarme"
          />
        </div>
        <div className="w-full flex justify-center">
          <ButtonComponent
            disabled={!isDirty || !isValid}
            type="submit"
            variant="solid"
            formNoValidate={true}
          >
            {mutation.isPending ? <SpinnerComponent /> : "Ingresar"}
          </ButtonComponent>
        </div>
      </form>
      {errorModal && (
        <ErrorModalLogin
          displayCloseButton={true}
          message={
            "El correo digitado no tiene una cuenta vigente. Para ingresar, debe crear una cuenta."
          } //{validateEmailMutation.data?.data.message}
          onCloseEvent={() => {
            setErrorModal(false);
          }}
        />
      )}
    </>
  );
};
