export default function inputAuth({ placeholder, type, changeHandler, id }: { changeHandler?: React.ChangeEventHandler<HTMLInputElement>, placeholder: string, type: string, id: string }) {
  return (
    <input type={type} id={id} max={id === 'password' ? '8' : '3'} onChange={changeHandler} placeholder={placeholder} required className='p-4 w-full text-base rounded-xl bg-[#1F4247] appearance-none outline-none ring-0 border-none shadow-small overflow-auto' />
  )
}