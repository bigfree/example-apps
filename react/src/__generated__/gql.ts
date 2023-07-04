/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation CreateNodeType($nodeTypeCreateInput: NodeTypeCreateInput!) {\n        createNodeType(nodeTypeCreateInput: $nodeTypeCreateInput) {\n            __typename\n            id\n            name\n            externalId\n            updatedAt\n            createdAt\n            nodeTypeData {\n                __typename\n                id\n                color\n                acronym\n                description\n                geometry\n                width\n                height\n                createdAt\n                updatedAt\n            }\n        }\n    }\n": types.CreateNodeTypeDocument,
    "\n    fragment NewNodeType on NodeType {\n        id\n    }\n": types.NewNodeTypeFragmentDoc,
    "\n    query NodeTypes($nodeTypeWhereInput: NodeTypeWhereInput!) {\n        nodeTypes(nodeTypeWhereInput: $nodeTypeWhereInput) {\n            __typename\n            id\n            externalId\n            name\n            nodeTypeDataId\n            pinned\n            _count {\n                __typename\n                node\n            }\n            nodeTypeData {\n                __typename\n                id\n                color\n                geometry\n            }\n        }\n    }\n": types.NodeTypesDocument,
    "\n    query NodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {\n        nodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {\n            id\n            externalId\n            name\n            pinned\n            nodeTypeData {\n                id\n                color\n                geometry\n                width\n                height\n                description\n                acronym\n            }\n        }\n    }\n": types.NodeTypeDocument,
    "\n    mutation RemoveNodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {\n        removeNodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {\n            __typename\n            id\n            nodeTypeData {\n                __typename\n                id\n            }\n        }\n    }\n\n": types.RemoveNodeTypeDocument,
    "\n    mutation UpdateNodeType(\n        $nodeTypeUpdateInput: NodeTypeUpdateInput!\n        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!\n    ) {\n        updateNodeType(\n            nodeTypeUpdateInput: $nodeTypeUpdateInput\n            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput\n        ) {\n            __typename\n            id\n            name\n            externalId\n            nodeTypeData {\n                __typename\n                id\n                acronym\n                color\n                description\n                geometry\n                width\n                height\n            }\n        }\n    }\n\n": types.UpdateNodeTypeDocument,
    "\n    fragment UpdateNodeType on NodeType {\n        id\n    }\n": types.UpdateNodeTypeFragmentDoc,
    "\n    mutation UpdateNodeTypePinned(\n        $nodeTypeUpdateInput: NodeTypeUpdateInput!\n        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!\n    ) {\n        updateNodeType(\n            nodeTypeUpdateInput: $nodeTypeUpdateInput\n            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput\n        ) {\n            __typename\n            id\n            pinned\n        }\n    }\n\n": types.UpdateNodeTypePinnedDocument,
    "\n    query GetTasks($taskWhereInput: TaskWhereInput!) {\n        tasks(taskWhereInput: $taskWhereInput) {\n            id\n            name\n            content\n        }\n    }\n": types.GetTasksDocument,
    "\n    mutation CreateTask($taskCreateInput: TaskCreateInput!) {\n        createTask(taskCreateInput: $taskCreateInput) {\n            id\n            name\n            content\n        }\n    }\n": types.CreateTaskDocument,
    "\n    subscription Subscription {\n        taskAdded {\n            id\n            createdAt\n        }\n    }\n": types.SubscriptionDocument,
    "\n                                fragment NewTask on Task {\n                                    id\n                                }\n                            ": types.NewTaskFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateNodeType($nodeTypeCreateInput: NodeTypeCreateInput!) {\n        createNodeType(nodeTypeCreateInput: $nodeTypeCreateInput) {\n            __typename\n            id\n            name\n            externalId\n            updatedAt\n            createdAt\n            nodeTypeData {\n                __typename\n                id\n                color\n                acronym\n                description\n                geometry\n                width\n                height\n                createdAt\n                updatedAt\n            }\n        }\n    }\n"): (typeof documents)["\n    mutation CreateNodeType($nodeTypeCreateInput: NodeTypeCreateInput!) {\n        createNodeType(nodeTypeCreateInput: $nodeTypeCreateInput) {\n            __typename\n            id\n            name\n            externalId\n            updatedAt\n            createdAt\n            nodeTypeData {\n                __typename\n                id\n                color\n                acronym\n                description\n                geometry\n                width\n                height\n                createdAt\n                updatedAt\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment NewNodeType on NodeType {\n        id\n    }\n"): (typeof documents)["\n    fragment NewNodeType on NodeType {\n        id\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query NodeTypes($nodeTypeWhereInput: NodeTypeWhereInput!) {\n        nodeTypes(nodeTypeWhereInput: $nodeTypeWhereInput) {\n            __typename\n            id\n            externalId\n            name\n            nodeTypeDataId\n            pinned\n            _count {\n                __typename\n                node\n            }\n            nodeTypeData {\n                __typename\n                id\n                color\n                geometry\n            }\n        }\n    }\n"): (typeof documents)["\n    query NodeTypes($nodeTypeWhereInput: NodeTypeWhereInput!) {\n        nodeTypes(nodeTypeWhereInput: $nodeTypeWhereInput) {\n            __typename\n            id\n            externalId\n            name\n            nodeTypeDataId\n            pinned\n            _count {\n                __typename\n                node\n            }\n            nodeTypeData {\n                __typename\n                id\n                color\n                geometry\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query NodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {\n        nodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {\n            id\n            externalId\n            name\n            pinned\n            nodeTypeData {\n                id\n                color\n                geometry\n                width\n                height\n                description\n                acronym\n            }\n        }\n    }\n"): (typeof documents)["\n    query NodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {\n        nodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {\n            id\n            externalId\n            name\n            pinned\n            nodeTypeData {\n                id\n                color\n                geometry\n                width\n                height\n                description\n                acronym\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation RemoveNodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {\n        removeNodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {\n            __typename\n            id\n            nodeTypeData {\n                __typename\n                id\n            }\n        }\n    }\n\n"): (typeof documents)["\n    mutation RemoveNodeType($nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!) {\n        removeNodeType(nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput) {\n            __typename\n            id\n            nodeTypeData {\n                __typename\n                id\n            }\n        }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateNodeType(\n        $nodeTypeUpdateInput: NodeTypeUpdateInput!\n        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!\n    ) {\n        updateNodeType(\n            nodeTypeUpdateInput: $nodeTypeUpdateInput\n            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput\n        ) {\n            __typename\n            id\n            name\n            externalId\n            nodeTypeData {\n                __typename\n                id\n                acronym\n                color\n                description\n                geometry\n                width\n                height\n            }\n        }\n    }\n\n"): (typeof documents)["\n    mutation UpdateNodeType(\n        $nodeTypeUpdateInput: NodeTypeUpdateInput!\n        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!\n    ) {\n        updateNodeType(\n            nodeTypeUpdateInput: $nodeTypeUpdateInput\n            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput\n        ) {\n            __typename\n            id\n            name\n            externalId\n            nodeTypeData {\n                __typename\n                id\n                acronym\n                color\n                description\n                geometry\n                width\n                height\n            }\n        }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment UpdateNodeType on NodeType {\n        id\n    }\n"): (typeof documents)["\n    fragment UpdateNodeType on NodeType {\n        id\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation UpdateNodeTypePinned(\n        $nodeTypeUpdateInput: NodeTypeUpdateInput!\n        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!\n    ) {\n        updateNodeType(\n            nodeTypeUpdateInput: $nodeTypeUpdateInput\n            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput\n        ) {\n            __typename\n            id\n            pinned\n        }\n    }\n\n"): (typeof documents)["\n    mutation UpdateNodeTypePinned(\n        $nodeTypeUpdateInput: NodeTypeUpdateInput!\n        $nodeTypeWhereUniqueInput: NodeTypeWhereUniqueInput!\n    ) {\n        updateNodeType(\n            nodeTypeUpdateInput: $nodeTypeUpdateInput\n            nodeTypeWhereUniqueInput: $nodeTypeWhereUniqueInput\n        ) {\n            __typename\n            id\n            pinned\n        }\n    }\n\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query GetTasks($taskWhereInput: TaskWhereInput!) {\n        tasks(taskWhereInput: $taskWhereInput) {\n            id\n            name\n            content\n        }\n    }\n"): (typeof documents)["\n    query GetTasks($taskWhereInput: TaskWhereInput!) {\n        tasks(taskWhereInput: $taskWhereInput) {\n            id\n            name\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation CreateTask($taskCreateInput: TaskCreateInput!) {\n        createTask(taskCreateInput: $taskCreateInput) {\n            id\n            name\n            content\n        }\n    }\n"): (typeof documents)["\n    mutation CreateTask($taskCreateInput: TaskCreateInput!) {\n        createTask(taskCreateInput: $taskCreateInput) {\n            id\n            name\n            content\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    subscription Subscription {\n        taskAdded {\n            id\n            createdAt\n        }\n    }\n"): (typeof documents)["\n    subscription Subscription {\n        taskAdded {\n            id\n            createdAt\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n                                fragment NewTask on Task {\n                                    id\n                                }\n                            "): (typeof documents)["\n                                fragment NewTask on Task {\n                                    id\n                                }\n                            "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;