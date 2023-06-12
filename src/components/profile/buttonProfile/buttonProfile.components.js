"use client";

import Button from "@/components/authentication/button/buttonAuth.components";
import { useRouter } from "next/navigation";

export default function ButtonProfile() {
  const router = useRouter();
  const handleButtonProfile = () => {
    return router.push(`/profile/update`);
  };
  return (
    <Button
      typeName={"button"}
      title={"Update Profile"}
      class={"button-42"}
      handleCancel={handleButtonProfile}
    />
  );
}
