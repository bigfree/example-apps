/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type EnumNodeTypeGeometryEnumNullableFilter = {
  equals?: InputMaybe<NodeTypeGeometryEnum>;
  in?: InputMaybe<Array<NodeTypeGeometryEnum>>;
  not?: InputMaybe<NestedEnumNodeTypeGeometryEnumNullableFilter>;
  notIn?: InputMaybe<Array<NodeTypeGeometryEnum>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNode: Node;
  createNodeType: NodeType;
  createTask: Task;
  removeNode: Node;
  removeNodeType: NodeType;
  updateNode: Node;
  updateNodeType: NodeType;
  updateTask: Task;
};


export type MutationCreateNodeArgs = {
  nodeCreateInput: NodeCreateInput;
};


export type MutationCreateNodeTypeArgs = {
  nodeTypeCreateInput: NodeTypeCreateInput;
};


export type MutationCreateTaskArgs = {
  taskCreateInput: TaskCreateInput;
};


export type MutationRemoveNodeArgs = {
  nodeWhereUniqueInput: NodeWhereUniqueInput;
};


export type MutationRemoveNodeTypeArgs = {
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
};


export type MutationUpdateNodeArgs = {
  nodeUpdateInput: NodeUpdateInput;
  nodeWhereUniqueInput: NodeWhereUniqueInput;
};


export type MutationUpdateNodeTypeArgs = {
  nodeTypeUpdateInput: NodeTypeUpdateInput;
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
};


export type MutationUpdateTaskArgs = {
  taskUpdateInput: TaskUpdateInput;
  taskWhereUniqueInput: TaskWhereUniqueInput;
};

export type NestedEnumNodeTypeGeometryEnumNullableFilter = {
  equals?: InputMaybe<NodeTypeGeometryEnum>;
  in?: InputMaybe<Array<NodeTypeGeometryEnum>>;
  not?: InputMaybe<NestedEnumNodeTypeGeometryEnumNullableFilter>;
  notIn?: InputMaybe<Array<NodeTypeGeometryEnum>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Node = {
  __typename?: 'Node';
  createdAt: Scalars['DateTime'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  nodeType: NodeType;
  nodeTypeId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type NodeCountAggregate = {
  __typename?: 'NodeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  externalId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  nodeTypeId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NodeCreateInput = {
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nodeType: NodeTypeCreateNestedOneWithoutNodeInput;
};

export type NodeCreateManyNodeTypeInput = {
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NodeCreateManyNodeTypeInputEnvelope = {
  data: Array<NodeCreateManyNodeTypeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type NodeCreateNestedManyWithoutNodeTypeInput = {
  connect?: InputMaybe<Array<NodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NodeCreateOrConnectWithoutNodeTypeInput>>;
  create?: InputMaybe<Array<NodeCreateWithoutNodeTypeInput>>;
  createMany?: InputMaybe<NodeCreateManyNodeTypeInputEnvelope>;
};

export type NodeCreateOrConnectWithoutNodeTypeInput = {
  create: NodeCreateWithoutNodeTypeInput;
  where: NodeWhereUniqueInput;
};

export type NodeCreateWithoutNodeTypeInput = {
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NodeListRelationFilter = {
  every?: InputMaybe<NodeWhereInput>;
  none?: InputMaybe<NodeWhereInput>;
  some?: InputMaybe<NodeWhereInput>;
};

export type NodeMaxAggregate = {
  __typename?: 'NodeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeTypeId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeMinAggregate = {
  __typename?: 'NodeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeTypeId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeScalarWhereInput = {
  AND?: InputMaybe<Array<NodeScalarWhereInput>>;
  NOT?: InputMaybe<Array<NodeScalarWhereInput>>;
  OR?: InputMaybe<Array<NodeScalarWhereInput>>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeTypeId?: InputMaybe<StringFilter>;
};

export type NodeType = {
  __typename?: 'NodeType';
  _count: NodeTypeCount;
  acronym?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  geometry?: Maybe<NodeTypeGeometryEnum>;
  id: Scalars['ID'];
  name: Scalars['String'];
  node?: Maybe<Array<Node>>;
  updatedAt: Scalars['DateTime'];
};

export type NodeTypeCount = {
  __typename?: 'NodeTypeCount';
  node: Scalars['Int'];
};

export type NodeTypeCountAggregate = {
  __typename?: 'NodeTypeCountAggregate';
  _all: Scalars['Int'];
  acronym: Scalars['Int'];
  color: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  externalId: Scalars['Int'];
  geometry: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NodeTypeCreateInput = {
  acronym?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  geometry?: InputMaybe<NodeTypeGeometryEnum>;
  name: Scalars['String'];
  node?: InputMaybe<NodeCreateNestedManyWithoutNodeTypeInput>;
};

export type NodeTypeCreateNestedOneWithoutNodeInput = {
  connect?: InputMaybe<NodeTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTypeCreateOrConnectWithoutNodeInput>;
  create?: InputMaybe<NodeTypeCreateWithoutNodeInput>;
};

export type NodeTypeCreateOrConnectWithoutNodeInput = {
  create: NodeTypeCreateWithoutNodeInput;
  where: NodeTypeWhereUniqueInput;
};

export type NodeTypeCreateWithoutNodeInput = {
  acronym?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['String']>;
  geometry?: InputMaybe<NodeTypeGeometryEnum>;
  name: Scalars['String'];
};

export enum NodeTypeGeometryEnum {
  Circle = 'CIRCLE',
  Square = 'SQUARE',
  Triangle = 'TRIANGLE'
}

export type NodeTypeMaxAggregate = {
  __typename?: 'NodeTypeMaxAggregate';
  acronym?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  geometry?: Maybe<NodeTypeGeometryEnum>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeTypeMinAggregate = {
  __typename?: 'NodeTypeMinAggregate';
  acronym?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  externalId?: Maybe<Scalars['String']>;
  geometry?: Maybe<NodeTypeGeometryEnum>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeTypeRelationFilter = {
  is?: InputMaybe<NodeTypeWhereInput>;
  isNot?: InputMaybe<NodeTypeWhereInput>;
};

export type NodeTypeUpdateInput = {
  acronym?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  geometry?: InputMaybe<NullableEnumNodeTypeGeometryEnumFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  node?: InputMaybe<NodeUpdateManyWithoutNodeTypeNestedInput>;
};

export type NodeTypeUpdateOneRequiredWithoutNodeNestedInput = {
  connect?: InputMaybe<NodeTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTypeCreateOrConnectWithoutNodeInput>;
  create?: InputMaybe<NodeTypeCreateWithoutNodeInput>;
  update?: InputMaybe<NodeTypeUpdateWithoutNodeInput>;
  upsert?: InputMaybe<NodeTypeUpsertWithoutNodeInput>;
};

export type NodeTypeUpdateWithoutNodeInput = {
  acronym?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  geometry?: InputMaybe<NullableEnumNodeTypeGeometryEnumFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeTypeUpsertWithoutNodeInput = {
  create: NodeTypeCreateWithoutNodeInput;
  update: NodeTypeUpdateWithoutNodeInput;
};

export type NodeTypeWhereInput = {
  AND?: InputMaybe<Array<NodeTypeWhereInput>>;
  NOT?: InputMaybe<Array<NodeTypeWhereInput>>;
  OR?: InputMaybe<Array<NodeTypeWhereInput>>;
  acronym?: InputMaybe<StringNullableFilter>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  externalId?: InputMaybe<StringNullableFilter>;
  geometry?: InputMaybe<EnumNodeTypeGeometryEnumNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  node?: InputMaybe<NodeListRelationFilter>;
};

export type NodeTypeWhereUniqueInput = {
  acronym?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NodeUpdateInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nodeType?: InputMaybe<NodeTypeUpdateOneRequiredWithoutNodeNestedInput>;
};

export type NodeUpdateManyMutationInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeUpdateManyWithWhereWithoutNodeTypeInput = {
  data: NodeUpdateManyMutationInput;
  where: NodeScalarWhereInput;
};

export type NodeUpdateManyWithoutNodeTypeNestedInput = {
  connect?: InputMaybe<Array<NodeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<NodeCreateOrConnectWithoutNodeTypeInput>>;
  create?: InputMaybe<Array<NodeCreateWithoutNodeTypeInput>>;
  createMany?: InputMaybe<NodeCreateManyNodeTypeInputEnvelope>;
  delete?: InputMaybe<Array<NodeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<NodeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<NodeWhereUniqueInput>>;
  set?: InputMaybe<Array<NodeWhereUniqueInput>>;
  update?: InputMaybe<Array<NodeUpdateWithWhereUniqueWithoutNodeTypeInput>>;
  updateMany?: InputMaybe<Array<NodeUpdateManyWithWhereWithoutNodeTypeInput>>;
  upsert?: InputMaybe<Array<NodeUpsertWithWhereUniqueWithoutNodeTypeInput>>;
};

export type NodeUpdateWithWhereUniqueWithoutNodeTypeInput = {
  data: NodeUpdateWithoutNodeTypeInput;
  where: NodeWhereUniqueInput;
};

export type NodeUpdateWithoutNodeTypeInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type NodeUpsertWithWhereUniqueWithoutNodeTypeInput = {
  create: NodeCreateWithoutNodeTypeInput;
  update: NodeUpdateWithoutNodeTypeInput;
  where: NodeWhereUniqueInput;
};

export type NodeWhereInput = {
  AND?: InputMaybe<Array<NodeWhereInput>>;
  NOT?: InputMaybe<Array<NodeWhereInput>>;
  OR?: InputMaybe<Array<NodeWhereInput>>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  nodeType?: InputMaybe<NodeTypeRelationFilter>;
  nodeTypeId?: InputMaybe<StringFilter>;
};

export type NodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NullableEnumNodeTypeGeometryEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<NodeTypeGeometryEnum>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  node: Node;
  nodeType: NodeType;
  nodeTypes: Array<NodeType>;
  nodes: Array<Node>;
  task: Task;
  tasks: Array<Task>;
};


export type QueryNodeArgs = {
  nodeWhereUniqueInput: NodeWhereUniqueInput;
};


export type QueryNodeTypeArgs = {
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
};


export type QueryNodeTypesArgs = {
  nodeTypeWhereInput: NodeTypeWhereInput;
};


export type QueryNodesArgs = {
  nodeWhereInput: NodeWhereInput;
};


export type QueryTaskArgs = {
  taskWhereUniqueInput: TaskWhereUniqueInput;
};


export type QueryTasksArgs = {
  taskWhereInput: TaskWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  nodeAdded: Node;
  nodeTypeAdded: NodeType;
  nodeTypeUpdated: NodeType;
  nodeUpdated: Node;
  taskAdded: Task;
};

export type Task = {
  __typename?: 'Task';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TaskCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TaskUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  content?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NodeTypesQueryVariables = Exact<{
  nodeTypeWhereInput: NodeTypeWhereInput;
}>;


export type NodeTypesQuery = { __typename?: 'Query', nodeTypes: Array<{ __typename?: 'NodeType', id: string, name: string, color?: string | null, createdAt: any }> };

export type GetTasksQueryVariables = Exact<{
  taskWhereInput: TaskWhereInput;
}>;


export type GetTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name: string, content?: string | null }> };

export type CreateTaskMutationVariables = Exact<{
  taskCreateInput: TaskCreateInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string, name: string, content?: string | null } };

export type SubscriptionSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscriptionSubscription = { __typename?: 'Subscription', taskAdded: { __typename?: 'Task', id: string, createdAt: any } };

export type NewTaskFragment = { __typename?: 'Task', id: string } & { ' $fragmentName'?: 'NewTaskFragment' };

export const NewTaskFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewTask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewTaskFragment, unknown>;
export const NodeTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NodeTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeWhereInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<NodeTypesQuery, NodeTypesQueryVariables>;
export const GetTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTasks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskWhereInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"taskWhereInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskCreateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"taskCreateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskCreateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Subscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taskAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SubscriptionSubscription, SubscriptionSubscriptionVariables>;