import { createFormContext } from '@mantine/form';
import { PreviewNodeType } from '../store/PreviewNodeType.store';

export const [NodeTypeFormProvider, useNodeTypeFormContext, useNodeTypeForm] = createFormContext<PreviewNodeType>();