import Button from "./components/ui/Button";

export default function ButtonDemo() {
  const handleClick = () => alert("הכפתור עובד! 🎉");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>בדיקה של הכפתור</h2>
      <Button onClick={handleClick}>Primary Button</Button>
      <Button disabled >
        Disabled Button
      </Button>
    </div>
  );
}
