import { Button, Table } from "@heroui/react";
import { DeleteModal } from "./DeleteModal";

export function RoomTable({ roomData }) {
  console.log(roomData);
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Room Name</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Stock</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>

            {
              roomData.map(data => <Table.Row key={data._id}>
                <Table.Cell>{data.roomName}</Table.Cell>
                <Table.Cell>$ {data.hourlyRate}</Table.Cell>
                <Table.Cell>{data.capacity}</Table.Cell>
                <Table.Cell>{data.ownerEmail}</Table.Cell>
                <Table.Cell>
                  <Button className={'mr-4'}>
                    Edit
                  </Button>
                  <DeleteModal
                    detailId={data._id}
                  />
                </Table.Cell>
              </Table.Row>)
            }

          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}