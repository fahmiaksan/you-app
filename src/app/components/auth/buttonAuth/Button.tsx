import { useEffect } from "react"

export default function ButtonAuth({ valid, isLoading }: { valid: boolean, isLoading: boolean }) {
  useEffect(() => {
    console.log(valid);
  }, [valid]);
  return (
    <button className={`bg-gradient-to-tr from-cyan-400 to-blue-400 text-white font-bold rounded-xl text-center p-4 relative z-10 w-full ${valid && 'shadow-lg shadow-blue-400'}`}
    disabled={!valid}
    >
      <p className="relative">
        {isLoading ? 'Submited...' : 'Login'}
      </p>
      {
        !valid && <span className="absolute top-0 left-0 bottom-0 right-0 rounded-xl bg-[rgba(0,0,0,0.5)]"></span>
      }
    </button>
  )
};
