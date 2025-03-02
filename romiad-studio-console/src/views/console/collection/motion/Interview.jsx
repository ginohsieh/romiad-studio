import {
  isEqual as _isEqual,
  cloneDeep as _cloneDeep,
  hasIn,
} from 'lodash-es';
import { Box, Button, Flex, Input, Stack, Text } from '@chakra-ui/react';
import { Checkbox } from '../../../../components/ui/checkbox'
import { Field } from '../../../../components/ui/field'
import { DialogBody, DialogContent, DialogFooter, DialogRoot, DialogTitle, DialogTrigger, DialogHeader, DialogCloseTrigger } from '../../../../components/ui/dialog';
import DraggableTable from '../../../../components/DraggableTable';
import { useCallback, useMemo, useState } from 'react';
import FormDialog from '../../../../components/FormDialog';

export default function Interview() {
  const originalData = [
    { id: 1, name: 'Item 1', src: 'https://youtube.com', thumbnail: '' },
    { id: 2, name: 'Item 2', src: 'https://www.google.com', thumbnail: '' },
    { id: 3, name: 'Item 3', src: 'https://www.google.com', thumbnail: '' },
  ];

  const [data, setData] = useState(originalData);
  const disableSave = _isEqual(originalData, data);


  const columns = useMemo(() => [
    {
      key: 'mark_for_delete', title: 'Delete', renderFn: ({ row, column, rowIndex }) => {
        return (
          <Checkbox checked={!!row[column.key]} onCheckedChange={(e) => {
            setData((val) => {
              const newVal = _cloneDeep(val);
              newVal[rowIndex][column.key] = !!e.checked
              return newVal;
            })
          }
          } />
        )
      }
    },
    { key: 'name', title: 'Name', editable: true },
    { key: 'src', title: 'Src', editable: true },
    { key: 'thumbnail', title: 'Thumbnail', editable: true },
  ], [])

  const onChange = useCallback((newData) => {
    console.log(newData)
    setData(newData)
  }, []);

  const onReset = useCallback(() => {
    setData(originalData);
  }, [originalData])

  const onSave = useCallback(() => {
    console.log('data', data.filter((row) => !row.mark_for_delete))
  }, [data])


  const handleAddRecord = useCallback((newRecord) => {
    setData(prevData => [
      ...prevData,
      {
        id: Math.max(0, ...prevData.map(item => item.id)) + 1,
        ...newRecord
      }
    ]);
  }, []);

  return (
    <Stack>
      <Flex>
      <FormDialog
        columns={columns}
        onSave={handleAddRecord}
      />
      </Flex>
      <DraggableTable
        columns={columns}
        data={data}
        onChange={onChange}
      />
      <Flex justify="flex-end" columnGap={4}>
        <Button variant="solid" onClick={onReset}>Reset</Button>
        <Button variant="solid" disabled={disableSave} onClick={onSave}>Save</Button>
      </Flex>
    </Stack>
  );
}
