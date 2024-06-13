import { Button, Result } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HOME_URL } from "@/urls";

export function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Không tìm thấy trang | KINESS";
  }, []);

  return (
    <Result
      style={{ paddingTop: 150 }}
      status='404'
      title={"Lỗi 404"}
      subTitle={"Lỗi 404"}
      extra={
        <Button type='primary' onClick={backHome}>
          {"Trở về trang chủ"}
        </Button>
      }
    />
  );

  function backHome() {
    navigate(HOME_URL);
  }
}
