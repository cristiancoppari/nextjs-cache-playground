"use client";

import Image from "next/image";
import Container from "@/components/container";
import { DeleteButton, DeleteButtonWithParam } from "@/components/button";
import { getUsersApiResponse } from "@/utils/fetchers";
import { deleteUserAction } from "@/actions/actions";

type UserProps = {
  user: getUsersApiResponse;
};

export default function User({ user }: UserProps) {
  return (
    <Container
      type="client"
      key={user.id}
      classNames="flex gap-2 flex-col mb-2 items-start border rounded"
    >
      <div className="flex gap-4 items-center w-full">
        <div className="flex flex-col gap-2 flex-1">
          <p className="font-bold">{user.name}</p>
          <p>{user.createdAt}</p>
        </div>

        <Image
          src={user.image}
          alt="Random cat"
          height={40}
          width={40}
          className="aspect-square rounded w-[80px] h-[80px]"
        />
      </div>

      <DeleteButtonWithParam
        onDelete={() => deleteUserAction({ id: user.id })}
      />
    </Container>
  );
}
