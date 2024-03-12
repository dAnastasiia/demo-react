import { Stack } from "@mui/material";

import UsersList from "@/components/users/UsersList";
import PageTitle from "@/ui-kit/PageTitle";

export default function UsersPage() {
  return (
    <Stack>
      <PageTitle text="Users" />

      <UsersList />
    </Stack>
  );
}
