import {Card} from "../../../Atom";
import {Input} from "antd";

function Step3({handleInputChange, formData}) {
  return (
    <>
      <Card className="">
        <h2 className="mb-3">Job type</h2>
        <div>
          <label>Payment</label>
          <Input
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleInputChange}
            placeholder="Enter a job title"
            className="my-2"
          />
        </div>
      </Card>
    </>
  );
}

export default Step3;
