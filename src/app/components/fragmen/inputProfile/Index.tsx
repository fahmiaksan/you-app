export default function InputProfile({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="mb-4 flex justify-between items-center">
      <label
        htmlFor={title}
        className="block text-gray-500 mb-1 w-52 text-nowrap mr-6"
      >
        {title}:
      </label>
      {children}
    </div>
  )
};
