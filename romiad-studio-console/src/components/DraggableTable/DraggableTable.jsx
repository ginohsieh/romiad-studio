import { Table } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';

const SortableRow = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
  };

  return (
    <Table.Row
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      {children}
    </Table.Row>
  );
};

export default function DraggableTable({
  columns = [],
  data = [],
  onChange = () => {}
}) {
  const [rows, setRows] = useState(data);

  // Update rows when data changes
  useEffect(() => {
    setRows(data);
  }, [data]);

  // Configure sensors for drag detection
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Start dragging after moving 5px
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const activeIndex = rows.findIndex(row =>
        (row?.id ? row.id : `row-${rows.indexOf(row)}`) === active.id);
      const overIndex = rows.findIndex(row =>
        (row?.id ? row.id : `row-${rows.indexOf(row)}`) === over.id);

      const updatedRows = arrayMove(rows, activeIndex, overIndex);
      setRows(updatedRows);
      onChange(updatedRows);
    }
  }, [rows, onChange]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis]}
    >
      <Table.Root>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeader key={column.key}>
                {column.title}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <SortableContext
            items={rows.map(row => row?.id || `row-${rows.indexOf(row)}`)}
            strategy={verticalListSortingStrategy}
          >
            {rows.map((row, rowIndex) => {
              const rowId = row?.id || `row-${rowIndex}`;
              return (
                <SortableRow
                  key={rowId}
                  id={rowId}
                >
                  {columns.map((column) => (
                    <Table.Cell key={column.key}>
                      {column.renderFn ? column.renderFn({column, columns, row, rowIndex, data: rows}) : row[column.key]}
                    </Table.Cell>
                  ))}
                </SortableRow>
              );
            })}
          </SortableContext>
        </Table.Body>
      </Table.Root>
    </DndContext>
  );
}
