"use client";
import { DashboardSidebar } from "@/components";
import { isValidEmailAddressFormat } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DashboardCreateNewUser = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const addNewUser = () => {
    if (
      userInput.email.length > 3 &&
      userInput.role.length > 0 &&
      userInput.password.length > 0
    ) {
      if (!isValidEmailAddressFormat(userInput.email)) {
        toast.error("Вы ввели неверный формат адреса электронной почты");
        return;
      }

      if (userInput.password.length > 7) {
        const requestOptions: any = {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInput),
        };
        fetch(`http://localhost:3001/api/users`, requestOptions)
          .then((response) => {
            if(response.status === 201){
              return response.json();

            }else{
              
              throw Error("Ошибка при создании пользователя");
            }
          })
          .then((data) => {
            toast.success("Пользователь успешно добавлен");
            setUserInput({
              email: "",
              password: "",
              role: "user",
            });
          }).catch(error => {
            toast.error("Ошибка при создании пользователя");
          });
      } else {
        toast.error("Длина пароля должна превышать 7 символов");
      }
    } else {
      toast.error("Вы должны ввести все входные значения, чтобы добавить пользователя");
    }
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:pl-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Добавить нового пользователя</h1>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Электронная почта:</span>
            </div>
            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
            />
          </label>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Пароль:</span>
            </div>
            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              value={userInput.password}
              onChange={(e) =>
                setUserInput({ ...userInput, password: e.target.value })
              }
            />
          </label>
        </div>

        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Роль пользователя: </span>
            </div>
            <select
              className="select select-bordered"
              defaultValue={userInput.role}
              onChange={(e) =>
                setUserInput({ ...userInput, role: e.target.value })
              }
            >
              <option value="admin">администратор</option>
              <option value="user">пользователь</option>
            </select>
          </label>
        </div>

        <div className="flex gap-x-2">
          <button
            type="button"
            className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
            onClick={addNewUser}
          >
            Создать пользователя
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardCreateNewUser;
