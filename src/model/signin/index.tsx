import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
// import { ToastContainer, toast } from "react-toastify";
import { Button, TextField } from "@mui/material";

import { http } from "../../service/config";
import "./style.scss"

function Index() {

  const navigate = useNavigate();

    // interfase--------------------------------
    interface initialValues {
      email: string;
      password: string;
    }
    const initialValues: initialValues = {
      email: "",
      password: "",
    };
    //==========================================


    // Validation scheme for the input field type ------------------------------
    const schema = Yup.object().shape({
      email: Yup.string().email("Email invalit ").required("Email is required"),
      password: Yup.string().min(6, "Posswod invalit ").required("Password is required")
    });
    //==========================================



    // Form subnit  register--------------------------------------------------------
  const handelSubmit = async (value: initialValues) => {
    // console.log(value);
    
    try {
      const response = await http.post("/auth/login", value);
      // console.log(response);
      if (response.status === 200) {
        localStorage.setItem("acses-token", response?.data?.access_token);
        localStorage.setItem("refresh-token", response?.data?.refresh_token);
        localStorage.setItem("user-id", response?.data?.id);
        navigate("/main")
      }
    } catch (err) {
      console.log(err);
    }
  };
  //================================================================
    
  return (
    <>
      <div className="login-wrp w-full h-[100vh] flex items-center justify-center">
        <div className=" py-10 px-20 rounded-xl shadow-2xl bg-[rgba(250,250,250,0.85)]">
          <h1 className="text-center mb-5 text-[56px] font-bold">
            Tizimga kirish
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handelSubmit}
          >
            <Form className=" w-[550px]   flex flex-col gap-[15px]">
              
            <Field
                as={TextField}
                label="Email"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="email"
                name="email"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="mb-3 text-red-500 text-center"
              />

              <p className="text-[20px] text-sky-500 ml-[60%] hover:text-sky-700 duration-200 cursor-pointer">Parolni unutdingizmi?</p>
            <Field
                as={TextField}
                label="Parol"
                sx={{ "& input": { color: "#00000", fontSize: "20px" } }}
                type="password"
                name="password"
                className=" w-[100%] mb-3 outline-none py-0"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="mb-3 text-red-500 text-center"
              />


              <Button
                sx={{ fontSize: "16px", fontWeight: "600" , padding: "14px" }}
                variant="contained"
                type="submit"
                className="w-[100%] "
              >
                tizimga kirish
              </Button>
            </Form>
          </Formik>
          <p className="ml-[20%] text-center mt-2 text-[20px] flex items-center gap-2">
             Hisobingiz yo‘qmi?
            <span
              onClick={() => navigate("/")}
              className=" text-sky-500 hover:text-sky-700 duration-300 border-b border-sky-300 font-medium cursor-pointer"
            >
             Ro‘yxatdan o‘tish
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Index;
