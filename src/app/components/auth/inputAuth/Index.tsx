export default function inputAuth({ placeholder, type, changeHandler }: { changeHandler?: React.ChangeEventHandler<HTMLInputElement>, placeholder: string, type: string }) {
  return (
    <input type={type} onChange={changeHandler} placeholder={placeholder} className='p-4 w-full text-base rounded-xl bg-[#1F4247] appearance-none outline-none ring-0 border-none shadow-small overflow-auto' />
  )
}