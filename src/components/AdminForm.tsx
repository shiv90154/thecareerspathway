"use client";

export default function AdminForm({
  title,
  fields,
  onSubmit,
  submitLabel = "Submit",
}: any) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md p-6 rounded-xl grid gap-6"
    >
      <h2 className="text-2xl font-semibold">{title}</h2>

      {fields.map((f: any, i: number) => (
        <div key={i}>
          {f.type === "textarea" ? (
            <textarea
              name={f.name}
              rows={f.rows || 4}
              placeholder={f.placeholder}
              className="input"
              required={f.required}
            ></textarea>
          ) : (
            <input
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              className="input"
              required={f.required}
            />
          )}
        </div>
      ))}

      <button className="bg-blue-700 text-white py-3 rounded-lg">
        {submitLabel}
      </button>
    </form>
  );
}
