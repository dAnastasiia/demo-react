import { useTheme } from "@mui/material";

import { type MRT_ColumnDef } from "material-react-table";

import { User } from "./types";

export const data: User[] = [
  {
    id: 1,
    name: "John Doe",
    address: {
      street: "261 Erdman Ford",
      city: "East Daphne",
      state: "Kentucky",
    },
  },
  {
    id: 2,
    name: "Jane Doe",
    address: { street: "769 Dominic Grove", city: "Columbus", state: "Ohio" },
  },
  {
    id: 3,
    name: "Joe Doe",
    address: {
      street: "566 Brakus Inlet",
      city: "South Linda",
      state: "West Virginia",
    },
  },
  {
    id: 4,
    name: "Kevin Vandy",
    address: { street: "722 Emie Stream", city: "Lincoln", state: "Nebraska" },
  },
  {
    id: 5,
    name: "Joshua Rolluffs",
    address: {
      street: "32188 Larkin Turnpike",
      city: "Omaha",
      state: "Nebraska",
    },
  },
  {
    id: 6,
    name: "Fred Holly",
    address: { street: "725 Lakewood", city: "Lincoln", state: "Nebraska" },
  },
  {
    id: 7,
    name: "Victoria Rolluffs",
    address: {
      street: "32188 Larkin Turnpike",
      city: "Omaha",
      state: "Nebraska",
    },
  },
];

export const columns: MRT_ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "address.street",
    header: "Street",
  },
  {
    accessorKey: "address.city",
    header: "City",
  },
  {
    accessorKey: "address.state",
    header: "State",
  },
];
