import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-tailwind/react";
import { collection, doc, onSnapshot } from "firebase/firestore";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useAddUpdateList, useDeleteList, useLists } from "../api/Api";
import { VUtils } from "../component/common/VUtils";
import DBUploader from "./UploadFile";
import { expoDatabase } from "./getFirebaseData";
import { getStore } from "../services/FirebaseServices";
import { useEffect } from "react";

interface IFormInput {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
}
const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

export default function RealTimeDataFetch() {
  const lists = useLists();
  const deleteList = useDeleteList();
  const addUpdateList = useAddUpdateList();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    // defaultValues
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await addUpdateList.mutateAsync(data);
    lists.refetch();
  };

  async function deleteDocs(id: string) {
    if (!(await VUtils.showConfirmAlert())) return;
    await deleteList.mutateAsync(id);
    lists.refetch();
  }

  // const unsub = onSnapshot(collection(getStore(), "fromData"), (doc) => {
  //   console.log("onSnapshot Current data: ",  VUtils.transformFirebaseResult(doc));
  // });

  // useEffect(() => {
  //   unsub();
  // }, []);
  console.log(lists, "lists");
  if (lists.isLoading) return <div className="custom-loader" />;
  else if (lists.isError)
    return <div style={{ color: "black" }}> Error Occured...</div>;

  return (
    <>
      <button onClick={() => expoDatabase("fromData")}>
        Download Firebase Database{" "}
      </button>

      <DBUploader />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="  p-2 grid grid-rows-3 gap-4">
          <div className="">
            <input
              className="border border-gray-300 "
              placeholder="Enter First Name"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
            {errors && (
              <p className=" text-end mx-32" style={{ color: "red" }}>
                {errors.firstName?.message}
              </p>
            )}
          </div>
          <div className="">
            <input
              className="border border-gray-300 "
              placeholder="Enter Last Name"
              {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
            />
            {errors && (
              <p className=" text-end mx-32" style={{ color: "red" }}>
                {errors.lastName?.message}
              </p>
            )}
          </div>
          <div>
            <input
              className="border border-gray-300 "
              placeholder="Enter Your Age"
              {...register("age", { min: 18, max: 99 })}
            />
            {errors && (
              <p className=" text-end mx-32" style={{ color: "red" }}>
                {errors.age?.message}
              </p>
            )}
          </div>
        </div>
        <Button placeholder="" type="submit">
          Submit
        </Button>
      </form>
      <div>
        {lists.data &&
          lists.data.map(function (item: any, index: number) {
            return (
              <>
                <div className=" flex flex-row gap-2">
                  <p>{item.index}</p>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                  <p>{item.age}</p>
                  <p onClick={() => reset(item)}>Edit</p>
                  <p onClick={() => deleteDocs(item.id)}>Delete</p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
