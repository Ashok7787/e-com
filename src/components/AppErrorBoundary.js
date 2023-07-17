import React from "react";
import error from "../Assets/Images/logo.jpg";
import { Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  handleRefreshPage() {
    window.location.reload();
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "75px 20px",
            }}
          >
            <div
              style={{
                width: "400px",
                height: "400px",
                padding: "5px 20px",
                /* border-radius: "50%"; */
                boxShadow: " 0 13px 27px -5px rgba(50, 50, 93, 0.25)",
                backgroundColor: " #f5f5f5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // margin-bottom: 10px;
                // margin-top: 10px;
              }}
            >
              <img
                src={error}
                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              ></img>
              <div>
                <h1
                  style={{
                    fontSize: "40px",
                    fontWeight: "600px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  OOPS !
                </h1>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  &nbsp; &nbsp; It is a problem with us.
                  <br />
                  Please refresh your browser
                </h1>
              </div>
              <Button
                type="primary"
                icon={<ReloadOutlined />}
                onClick={() => this.handleRefreshPage()}
              >
                Reload
              </Button>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
