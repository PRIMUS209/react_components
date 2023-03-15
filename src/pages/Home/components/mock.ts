export interface List {
  id: string;
  type: string;
  label: string;
  defaultValue?: string;
}

const table = [
  {
    id: "first_name",
    type: "inputText",
    label: "First Name",
    defaultValue: "Some first name",
  },
  {
    id: "last_name",
    type: "inputText",
    label: "Last Name",
  },
  {
    id: "email",
    type: "inputEmail",
    label: "Email",
  },
  {
    id: "password",
    type: "inputPassword",
    label: "Password",
  },
];

export default table;
