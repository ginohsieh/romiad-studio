import { useState } from 'react';
import { Button, Input, Stack } from '@chakra-ui/react';
import { Field } from '../ui/field';
import {
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogCloseTrigger,
  DialogActionTrigger
} from '../ui/dialog';

/**
 * A reusable dialog component for adding new records
 *
 * @param {Object} props
 * @param {Array} props.columns - Array of column definitions, each with at least {key, title, editable}
 * @param {Function} props.onSave - Callback when save button is clicked, receives form data
 * @param {string} props.triggerText - Text for the trigger button
 * @param {string} props.title - Dialog title
 * @param {string} props.size - Dialog size
 * @param {string} props.placement - Dialog placement
 * @param {string} props.motionPreset - Dialog motion preset
 */
export default function FormDialog({
  columns = [],
  onSave,
  triggerText = "Add",
  title = "Add new record",
  size = "cover",
  placement = "center",
  motionPreset = "slide-in-bottom"
}) {
  const [formData, setFormData] = useState({});
  const editableColumns = columns.filter(column => column.editable);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (close) => {
    if (onSave) {
      onSave(formData);
    }
    setFormData({});
    close();
  };

  const handleCancel = (close) => {
    setFormData({});
  };

  return (
    <DialogRoot size={size} placement={placement} motionPreset={motionPreset}>
      <DialogTrigger asChild>
        <Button>{triggerText}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Stack>
            {editableColumns.map((column) => (
              <Field key={column.key} label={column.title}>
                <Input
                  name={column.key}
                  value={formData[column.key] || ''}
                  onChange={handleInputChange}
                />
              </Field>
            ))}
          </Stack>
        </DialogBody>
        <DialogFooter>
          <Button>Save</Button>
          <DialogActionTrigger asChild>
            <Button>Cancel</Button>
          </DialogActionTrigger>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
