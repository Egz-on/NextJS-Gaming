import {Alert} from "@heroui/react";

export default function AlertColors() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-full">
        <div className="w-full flex items-center my-3">
          <Alert color="success" title="This is a success alert" />
        </div>
      </div>
    </div>
  );
}