import { Button, Table } from "@heroui/react";
import { DeleteModal } from "./DeleteModal";
import Link from "next/link";

export function RoomTable({ roomData }) {
  console.log(roomData);
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
            <Table.Column isRowHeader>Room Name</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Capacity</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>

            {
              roomData.map(data => <Table.Row key={data._id}>
                <Table.Cell>{data.roomName}</Table.Cell>
                <Table.Cell>$ {data.hourlyRate}</Table.Cell>
                <Table.Cell>{data.capacity}</Table.Cell>
                <Table.Cell>

                  <Link href={`/rooms/${data._id}/edit`}>
                    <Button className={'mr-4'}>
                      Edit
                    </Button>
                  </Link>

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