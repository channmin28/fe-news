import { Button, Result } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HOME_URL } from "@/urls";

export function ServerErrorPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lỗi hệ thống | KINESS";
  }, []);

  return (
    <Result
      style={{ paddingTop: 150 }}
      status='500'
      title={"Lỗi 500"}
      subTitle={"Lỗi 500"}
      extra={
        <Button type='primary' onClick={backHome}>
          {"Trờ về trang chủ"}
        </Button>
      }
    />
  );

  function backHome() {
    navigate(HOME_URL);
  }
}
