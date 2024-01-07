import { Card, Row, Col } from "antd";

const ProfileCard = ({ name }: ProfileCardProps) => {
  return (
    <Card>
      <Row align="middle" justify="space-between">
        <Col>
          <p className="text-2xl">Hello</p>
        </Col>
        <Col>
          <div className="border-dashed border-2 border-sky-300">
            <img
              src="https://static.bangkokpost.com/media/content/20230418/c1_2551739.jpg"
              alt="SCB X Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
        </Col>
      </Row>
      <Row align="middle">
        <Col>
          <p className="text-xl">{name}</p>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
