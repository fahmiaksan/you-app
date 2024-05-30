import { FormProps } from "@/app/type";
import FieldProfile from "./Index";

export default function FormProfile(
  { submitHandler, handleImageChange, selectedImage, setDataForm }:
    FormProps) {
  return (<form className="flex flex-col w-full" onSubmit={submitHandler}>
    <FieldProfile
      handleImageChange={handleImageChange}
      selectedImage={selectedImage}
      setDataForm={setDataForm}
    />
    <button type="submit" className="absolute text-gray-500 top-5 right-3 text">Save and Update</button>
  </form>)
};
