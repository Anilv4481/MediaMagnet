import { Avatar } from "@material-tailwind/react";

export function AvatarIcon() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar
        placeholder=""
        variant="circular"
        alt="user 1"
        className="border-2 border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
    </div>
  );
}
