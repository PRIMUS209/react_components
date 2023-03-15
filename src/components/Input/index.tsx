import { List } from "../../pages/Home/components/mock";

type Props = {
  list?: Array<List>;
  setInputData: Function;
};

const Input = ({ list, setInputData }: Props) => {
  const setType = (type: string) => {
    let res = type;
    switch (res) {
      case "inputEmail":
        res = "email";
        break;
      case "inputPassword":
        res = "password";
        break;
      default:
        res = "text";
    }
    return res;
  };

  return (
    <div>
      Custom Input
      {list?.map((item) => (
        <div key={item.id}>
          <input
            className="custom-input"
            type={setType(item.type)}
            placeholder={item.label}
            defaultValue={item.defaultValue}
            onChange={(e) => setInputData(e.target.value)}
            required
          />
        </div>
      ))}
    </div>
  );
};

export default Input;
