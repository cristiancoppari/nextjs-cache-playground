type ComponentType = "server" | "client";

type ContainerProps = {
  type: ComponentType;
  children: React.ReactNode;
  classNames?: string;
};

export default function Container({
  type,
  children,
  classNames,
}: ContainerProps) {
  return (
    <div
      className={`p-4 border rounded-lg ${classNames} ${
        type === "server" ? "" : ""
      } ${type === "server" ? "bg-indigo-50" : "bg-orange-50"}`}
    >
      {type === "server" && (
        <p className="text-indigo-800 text-sm mb-2">Server Component</p>
      )}

      {type === "client" && (
        <p className="text-orange-400 text-sm mb-2">Client Component</p>
      )}
      {children}
    </div>
  );
}
