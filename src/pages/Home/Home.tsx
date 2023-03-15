import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import Input from "../../components/Input";
import table from "./components/mock";

const HomePage = () => {
  const [fields, setFields]: [[], Dispatch<SetStateAction<any>>] = useState([]);
  const [inputData, setInputData] = useState();
  const [validate, setValidate]: [boolean, Dispatch<SetStateAction<boolean>>] =
    useState(false);

  function lookForEmptyInputs() {
    var emptyInputs = Array.from(
      document.querySelectorAll(".custom-input") as NodeListOf<HTMLInputElement>
    ).filter((input) => input.value === "");
    if (emptyInputs.length) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setFields(JSON.parse(data));
  }, []);

  useMemo(() => {
    localStorage.setItem("user", JSON.stringify(fields));
    lookForEmptyInputs();
  }, [fields, inputData]);

  const serializeForm = (formNode: HTMLInputElement) => {
    const { elements }: any = formNode;
    const data = Array.from(elements)
      .filter((item: any) => item.localName === "input")
      .map((element: any) => {
        let valueArray = [];
        valueArray.push(element.placeholder);
        valueArray.push(element.value);
        const itemValue = valueArray.join(" : ");

        return itemValue;
      });
    setFields([...fields, data]);
    alert("User data saved on local storage!");
  };

  const handleFormSubmit = (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    event.preventDefault();

    const applicantForm = document.getElementById(
      "custom-form"
    ) as HTMLInputElement;

    serializeForm(applicantForm);
    event.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} id="custom-form">
      <Input list={table} setInputData={setInputData} />
      <button type="submit" disabled={!validate}>
        Add User
      </button>
    </form>
  );
};

export default HomePage;
