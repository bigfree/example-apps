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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type Action = {
  __typename?: 'Action';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalID?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internalID: Scalars['String'];
  name: Scalars['String'];
  type: ActionTypeEnum;
  updatedAt?: Maybe<Scalars['DateTime']>;
  values: Scalars['JSON'];
};

export type ActionCountAggregate = {
  __typename?: 'ActionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  externalID: Scalars['Int'];
  id: Scalars['Int'];
  internalID: Scalars['Int'];
  name: Scalars['Int'];
  type: Scalars['Int'];
  updatedAt: Scalars['Int'];
  values: Scalars['Int'];
};

export type ActionCreateInput = {
  externalID?: InputMaybe<Scalars['String']>;
  internalID: Scalars['String'];
  name: Scalars['String'];
  type: ActionTypeEnum;
  values: Scalars['JSON'];
};

export type ActionMaxAggregate = {
  __typename?: 'ActionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalID?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  internalID?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ActionTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ActionMinAggregate = {
  __typename?: 'ActionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalID?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  internalID?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ActionTypeEnum>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum ActionTypeEnum {
  Checkbox = 'CHECKBOX',
  Number = 'NUMBER',
  Option = 'OPTION',
  Select = 'SELECT',
  Text = 'TEXT',
  Textarea = 'TEXTAREA'
}

export type ActionWhereInput = {
  AND?: InputMaybe<Array<ActionWhereInput>>;
  NOT?: InputMaybe<Array<ActionWhereInput>>;
  OR?: InputMaybe<Array<ActionWhereInput>>;
  externalID?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  internalID?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumActionTypeEnumFilter>;
  values?: InputMaybe<JsonFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type EnumActionTypeEnumFilter = {
  equals?: InputMaybe<ActionTypeEnum>;
  in?: InputMaybe<Array<ActionTypeEnum>>;
  not?: InputMaybe<NestedEnumActionTypeEnumFilter>;
  notIn?: InputMaybe<Array<ActionTypeEnum>>;
};

export type EnumNodeTypeGeometryEnumNullableFilter = {
  equals?: InputMaybe<NodeTypeGeometryEnum>;
  in?: InputMaybe<Array<NodeTypeGeometryEnum>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedEnumNodeTypeGeometryEnumNullableFilter>;
  notIn?: InputMaybe<Array<NodeTypeGeometryEnum>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAction: Action;
  createNode: Node;
  createNodeType: NodeType;
  createTask: Task;
  removeNode: Node;
  removeNodeType: NodeType;
  updateNode: Node;
  updateNodeType: NodeType;
  updateTask: Task;
};


export type MutationCreateActionArgs = {
  actionCreateInput: ActionCreateInput;
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

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedEnumActionTypeEnumFilter = {
  equals?: InputMaybe<ActionTypeEnum>;
  in?: InputMaybe<Array<ActionTypeEnum>>;
  not?: InputMaybe<NestedEnumActionTypeEnumFilter>;
  notIn?: InputMaybe<Array<ActionTypeEnum>>;
};

export type NestedEnumNodeTypeGeometryEnumNullableFilter = {
  equals?: InputMaybe<NodeTypeGeometryEnum>;
  in?: InputMaybe<Array<NodeTypeGeometryEnum>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedEnumNodeTypeGeometryEnumNullableFilter>;
  notIn?: InputMaybe<Array<NodeTypeGeometryEnum>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
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
  isSet?: InputMaybe<Scalars['Boolean']>;
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
  parentNode?: Maybe<Scalars['String']>;
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
  parentNode: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NodeCreateInput = {
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nodeType: NodeTypeCreateNestedOneWithoutNodeInput;
  parentNode?: InputMaybe<Scalars['String']>;
};

export type NodeCreateManyNodeTypeInput = {
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentNode?: InputMaybe<Scalars['String']>;
};

export type NodeCreateManyNodeTypeInputEnvelope = {
  data: Array<NodeCreateManyNodeTypeInput>;
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
  parentNode?: InputMaybe<Scalars['String']>;
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
  parentNode?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeMinAggregate = {
  __typename?: 'NodeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeTypeId?: Maybe<Scalars['String']>;
  parentNode?: Maybe<Scalars['String']>;
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
  parentNode?: InputMaybe<StringNullableFilter>;
};

export type NodeType = {
  __typename?: 'NodeType';
  _count: NodeTypeCount;
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  node?: Maybe<Array<Node>>;
  nodeTypeData: NodeTypeData;
  nodeTypeDataId: Scalars['String'];
  pinned?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeTypeCount = {
  __typename?: 'NodeTypeCount';
  node: Scalars['Int'];
};

export type NodeTypeCountAggregate = {
  __typename?: 'NodeTypeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  externalId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  nodeTypeDataId: Scalars['Int'];
  pinned: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type NodeTypeCreateInput = {
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  node?: InputMaybe<NodeCreateNestedManyWithoutNodeTypeInput>;
  nodeTypeData: NodeTypeDataCreateNestedOneWithoutNodeTypeInput;
  pinned?: InputMaybe<Scalars['Boolean']>;
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
  externalId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nodeTypeData: NodeTypeDataCreateNestedOneWithoutNodeTypeInput;
  pinned?: InputMaybe<Scalars['Boolean']>;
};

export type NodeTypeData = {
  __typename?: 'NodeTypeData';
  acronym?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  geometry?: Maybe<NodeTypeGeometryEnum>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  nodeType?: Maybe<NodeType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type NodeTypeDataCreateNestedOneWithoutNodeTypeInput = {
  connect?: InputMaybe<NodeTypeDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTypeDataCreateOrConnectWithoutNodeTypeInput>;
  create?: InputMaybe<NodeTypeDataCreateWithoutNodeTypeInput>;
};

export type NodeTypeDataCreateOrConnectWithoutNodeTypeInput = {
  create: NodeTypeDataCreateWithoutNodeTypeInput;
  where: NodeTypeDataWhereUniqueInput;
};

export type NodeTypeDataCreateWithoutNodeTypeInput = {
  acronym?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  geometry?: InputMaybe<NodeTypeGeometryEnum>;
  height?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type NodeTypeDataRelationFilter = {
  is?: InputMaybe<NodeTypeDataWhereInput>;
  isNot?: InputMaybe<NodeTypeDataWhereInput>;
};

export type NodeTypeDataUpdateOneRequiredWithoutNodeTypeNestedInput = {
  connect?: InputMaybe<NodeTypeDataWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTypeDataCreateOrConnectWithoutNodeTypeInput>;
  create?: InputMaybe<NodeTypeDataCreateWithoutNodeTypeInput>;
  update?: InputMaybe<NodeTypeDataUpdateWithoutNodeTypeInput>;
  upsert?: InputMaybe<NodeTypeDataUpsertWithoutNodeTypeInput>;
};

export type NodeTypeDataUpdateWithoutNodeTypeInput = {
  acronym?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  color?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  geometry?: InputMaybe<NullableEnumNodeTypeGeometryEnumFieldUpdateOperationsInput>;
  height?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  width?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
};

export type NodeTypeDataUpsertWithoutNodeTypeInput = {
  create: NodeTypeDataCreateWithoutNodeTypeInput;
  update: NodeTypeDataUpdateWithoutNodeTypeInput;
};

export type NodeTypeDataWhereInput = {
  AND?: InputMaybe<Array<NodeTypeDataWhereInput>>;
  NOT?: InputMaybe<Array<NodeTypeDataWhereInput>>;
  OR?: InputMaybe<Array<NodeTypeDataWhereInput>>;
  acronym?: InputMaybe<StringNullableFilter>;
  color?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  geometry?: InputMaybe<EnumNodeTypeGeometryEnumNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  nodeType?: InputMaybe<NodeTypeRelationFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type NodeTypeDataWhereUniqueInput = {
  acronym?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export enum NodeTypeGeometryEnum {
  Circle = 'CIRCLE',
  Square = 'SQUARE',
  Triangle = 'TRIANGLE'
}

export type NodeTypeMaxAggregate = {
  __typename?: 'NodeTypeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeTypeDataId?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeTypeMinAggregate = {
  __typename?: 'NodeTypeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nodeTypeDataId?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NodeTypeRelationFilter = {
  is?: InputMaybe<NodeTypeWhereInput>;
  isNot?: InputMaybe<NodeTypeWhereInput>;
};

export type NodeTypeUpdateInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  node?: InputMaybe<NodeUpdateManyWithoutNodeTypeNestedInput>;
  nodeTypeData?: InputMaybe<NodeTypeDataUpdateOneRequiredWithoutNodeTypeNestedInput>;
  pinned?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type NodeTypeUpdateOneRequiredWithoutNodeNestedInput = {
  connect?: InputMaybe<NodeTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<NodeTypeCreateOrConnectWithoutNodeInput>;
  create?: InputMaybe<NodeTypeCreateWithoutNodeInput>;
  update?: InputMaybe<NodeTypeUpdateWithoutNodeInput>;
  upsert?: InputMaybe<NodeTypeUpsertWithoutNodeInput>;
};

export type NodeTypeUpdateWithoutNodeInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nodeTypeData?: InputMaybe<NodeTypeDataUpdateOneRequiredWithoutNodeTypeNestedInput>;
  pinned?: InputMaybe<NullableBoolFieldUpdateOperationsInput>;
};

export type NodeTypeUpsertWithoutNodeInput = {
  create: NodeTypeCreateWithoutNodeInput;
  update: NodeTypeUpdateWithoutNodeInput;
};

export type NodeTypeWhereInput = {
  AND?: InputMaybe<Array<NodeTypeWhereInput>>;
  NOT?: InputMaybe<Array<NodeTypeWhereInput>>;
  OR?: InputMaybe<Array<NodeTypeWhereInput>>;
  externalId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  node?: InputMaybe<NodeListRelationFilter>;
  nodeTypeData?: InputMaybe<NodeTypeDataRelationFilter>;
  nodeTypeDataId?: InputMaybe<StringFilter>;
  pinned?: InputMaybe<BoolNullableFilter>;
};

export type NodeTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nodeTypeDataId?: InputMaybe<Scalars['String']>;
};

export type NodeUpdateInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  nodeType?: InputMaybe<NodeTypeUpdateOneRequiredWithoutNodeNestedInput>;
  parentNode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type NodeUpdateManyMutationInput = {
  externalId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  parentNode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  parentNode?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
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
  parentNode?: InputMaybe<StringNullableFilter>;
};

export type NodeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NullableBoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableEnumNodeTypeGeometryEnumFieldUpdateOperationsInput = {
  set?: InputMaybe<NodeTypeGeometryEnum>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
  unset?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  actions: Array<Action>;
  node: Node;
  nodeType: NodeType;
  nodeTypes: Array<NodeType>;
  nodes: Array<Node>;
  task: Task;
  tasks: Array<Task>;
};


export type QueryActionsArgs = {
  actionWhereInput: ActionWhereInput;
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
  isSet?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  actionAdded: Action;
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

export type CreateNodeTypeMutationVariables = Exact<{
  nodeTypeCreateInput: NodeTypeCreateInput;
}>;


export type CreateNodeTypeMutation = { __typename?: 'Mutation', createNodeType: { __typename: 'NodeType', id: string, name: string, externalId?: string | null, updatedAt?: any | null, createdAt?: any | null, nodeTypeData: { __typename: 'NodeTypeData', id: string, color?: string | null, acronym?: string | null, description?: string | null, geometry?: NodeTypeGeometryEnum | null, width?: number | null, height?: number | null, createdAt?: any | null, updatedAt?: any | null } } };

export type NewNodeTypeFragment = { __typename?: 'NodeType', id: string } & { ' $fragmentName'?: 'NewNodeTypeFragment' };

export type NodeTypesQueryVariables = Exact<{
  nodeTypeWhereInput: NodeTypeWhereInput;
}>;


export type NodeTypesQuery = { __typename?: 'Query', nodeTypes: Array<{ __typename: 'NodeType', id: string, externalId?: string | null, name: string, nodeTypeDataId: string, pinned?: boolean | null, _count: { __typename: 'NodeTypeCount', node: number }, nodeTypeData: { __typename: 'NodeTypeData', id: string, color?: string | null, geometry?: NodeTypeGeometryEnum | null } }> };

export type NodeTypeQueryVariables = Exact<{
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
}>;


export type NodeTypeQuery = { __typename?: 'Query', nodeType: { __typename?: 'NodeType', id: string, externalId?: string | null, name: string, pinned?: boolean | null, nodeTypeData: { __typename?: 'NodeTypeData', id: string, color?: string | null, geometry?: NodeTypeGeometryEnum | null, width?: number | null, height?: number | null, description?: string | null, acronym?: string | null } } };

export type RemoveNodeTypeMutationVariables = Exact<{
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
}>;


export type RemoveNodeTypeMutation = { __typename?: 'Mutation', removeNodeType: { __typename: 'NodeType', id: string, nodeTypeData: { __typename: 'NodeTypeData', id: string } } };

export type UpdateNodeTypeMutationVariables = Exact<{
  nodeTypeUpdateInput: NodeTypeUpdateInput;
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
}>;


export type UpdateNodeTypeMutation = { __typename?: 'Mutation', updateNodeType: { __typename: 'NodeType', id: string, name: string, externalId?: string | null, nodeTypeData: { __typename: 'NodeTypeData', id: string, acronym?: string | null, color?: string | null, description?: string | null, geometry?: NodeTypeGeometryEnum | null, width?: number | null, height?: number | null } } };

export type UpdateNodeTypeFragment = { __typename?: 'NodeType', id: string } & { ' $fragmentName'?: 'UpdateNodeTypeFragment' };

export type UpdateNodeTypePinnedMutationVariables = Exact<{
  nodeTypeUpdateInput: NodeTypeUpdateInput;
  nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput;
}>;


export type UpdateNodeTypePinnedMutation = { __typename?: 'Mutation', updateNodeType: { __typename: 'NodeType', id: string, pinned?: boolean | null } };

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

export const NewNodeTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewNodeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewNodeTypeFragment, unknown>;
export const UpdateNodeTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UpdateNodeType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NodeType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<UpdateNodeTypeFragment, unknown>;
export const NewTaskFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewTask"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<NewTaskFragment, unknown>;
export const CreateNodeTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateNodeType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeCreateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNodeType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeCreateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeCreateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"nodeTypeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"geometry"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CreateNodeTypeMutation, CreateNodeTypeMutationVariables>;
export const NodeTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NodeTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeWhereInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nodeTypeDataId"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}},{"kind":"Field","name":{"kind":"Name","value":"_count"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodeTypeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"geometry"}}]}}]}}]}}]} as unknown as DocumentNode<NodeTypesQuery, NodeTypesQueryVariables>;
export const NodeTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NodeType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}},{"kind":"Field","name":{"kind":"Name","value":"nodeTypeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"geometry"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}}]}}]}}]}}]} as unknown as DocumentNode<NodeTypeQuery, NodeTypeQueryVariables>;
export const RemoveNodeTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveNodeType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeNodeType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nodeTypeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveNodeTypeMutation, RemoveNodeTypeMutationVariables>;
export const UpdateNodeTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNodeType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNodeType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeUpdateInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"nodeTypeData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acronym"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"geometry"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateNodeTypeMutation, UpdateNodeTypeMutationVariables>;
export const UpdateNodeTypePinnedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateNodeTypePinned"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeUpdateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NodeTypeWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateNodeType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeUpdateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeUpdateInput"}}},{"kind":"Argument","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nodeTypeWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pinned"}}]}}]}}]} as unknown as DocumentNode<UpdateNodeTypePinnedMutation, UpdateNodeTypePinnedMutationVariables>;
export const GetTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTasks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskWhereInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"taskWhereInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"taskCreateInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"taskCreateInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"taskCreateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const SubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"Subscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taskAdded"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SubscriptionSubscription, SubscriptionSubscriptionVariables>;