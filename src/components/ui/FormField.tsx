interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

const fieldClasses =
  "w-full rounded-xl border border-border bg-background-tertiary px-4 py-3 text-sm text-white placeholder:text-text-muted transition-colors focus:border-accent-purple focus:outline-none focus:ring-1 focus:ring-accent-purple/30";

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required,
  rows = 5,
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-text-secondary"
      >
        {label}
        {required && <span className="ml-0.5 text-accent-purple">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`${fieldClasses} resize-y`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={fieldClasses}
        />
      )}
    </div>
  );
}
