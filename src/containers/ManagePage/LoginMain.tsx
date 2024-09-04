"use client";
import { useState } from "react";
import "./LoginMain.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const ManageLogin: React.FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ password: string }>();
  console.log(register);
  const [loginError, setLoginError] = useState("");

  const onSubmit: SubmitHandler<{ password: string }> = async (data) => {
    if (!data.password) {
        console.log('data.password',data.password);
        return;
    }

    const result = await signIn("credentials", {
        redirect: false,
        password: data.password,

    });
    console.log("SignIn result:", result,data.password);

    if (result?.error) {
      setLoginError("아이디 또는 비밀번호가 잘못되었습니다.");
    } else {
      setLoginError("");
      router.push("/saleslist");
    }

    reset();
  };

  return (
    <div className="loginBox">
      <div id="loginText">관리자 비밀번호를 입력해주세요</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div id="loginInput">
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span>비밀번호를 입력해야 합니다.</span>
          )}
        </div>
        <div className="loginBtn">
          <button id="loginBtn1" type="submit">
            로그인
          </button>
        </div>
        {loginError && <p>{loginError}</p>}
      </form>
    </div>
  );
};

export default ManageLogin;
