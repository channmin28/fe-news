import { Button, Result } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HOME_URL } from "@/urls";

export function NotAuthorizationPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Không có quyền truy cập | KINESS";
  }, []);

  return (
    <Result
      style={{ paddingTop: 150 }}
      status='403'
      title={"Lỗi 403"}
      subTitle={"Lỗi 403"}
      extra={
        <Button type='primary' onClick={backHome}>
          {"Về trang chủ"}
        </Button>
      }
    />
  );

  function backHome() {
    navigate(HOME_URL);
  }
}
