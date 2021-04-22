import Button from "@material-ui/core/Button";

export default function Login() {
  return (
    <section>
      <div
        className="container d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-primary">
          <strong>reactor</strong>-pad-app
        </h1>
        <Button
          variant="contained"
          color="primary"
          className="mt-3"
          style={{ textTransform: "capitalize" }}
        >
          Sign in with Google
        </Button>
      </div>
    </section>
  );
}
