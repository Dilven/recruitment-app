import { usePlaylistIdContext } from "@/hooks/usePlaylistId";
import { Button, Input } from "antd";
import { useCallback } from "react";
import { ButtonsContainer, ButtonStyled, FormStyled } from "./styles";

export const Form = () => {
  const { setPlaylistId } = usePlaylistIdContext();
  const [form] = FormStyled.useForm();

  const onFinish = (values: { playlistId: string }) => {
    setPlaylistId(values.playlistId);
  };

  const onReset = useCallback(() => {
    setPlaylistId("");
    form.resetFields();
  }, [form, setPlaylistId]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <FormStyled
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onReset={onReset}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <FormStyled.Item
        name="playlistId"
        rules={[{ required: true, message: "Please input playlist id!" }]}
      >
        <Input placeholder="Playlist id" />
      </FormStyled.Item>
      <ButtonsContainer wrapperCol={{ offset: 8, span: 16 }}>
        <ButtonStyled type="primary" htmlType="submit">
          Submit
        </ButtonStyled>
        <ButtonStyled htmlType="button" onClick={onReset}>
          Reset
        </ButtonStyled>
      </ButtonsContainer>
    </FormStyled>
  );
};
