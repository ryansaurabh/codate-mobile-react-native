/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      dob
      bio
      gender
      phoneNumber
      description
      location {
        lat
        long
      }
      profilePhoto {
        bucket
        key
        region
      }
      photos {
        bucket
        key
        region
      }
      matches {
        items {
          id
          userId
          createdAt
          updatedAt
          userMatchesMatcheduserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dob
        bio
        gender
        phoneNumber
        description
        location {
          lat
          long
        }
        profilePhoto {
          bucket
          key
          region
        }
        photos {
          bucket
          key
          region
        }
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMatches = /* GraphQL */ `
  query GetUserMatches($id: ID!) {
    getUserMatches(id: $id) {
      id
      userId
      user {
        id
        name
        dob
        bio
        gender
        phoneNumber
        description
        location {
          lat
          long
        }
        profilePhoto {
          bucket
          key
          region
        }
        photos {
          bucket
          key
          region
        }
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      matcheduser {
        id
        name
        dob
        bio
        gender
        phoneNumber
        description
        location {
          lat
          long
        }
        profilePhoto {
          bucket
          key
          region
        }
        photos {
          bucket
          key
          region
        }
        matches {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userMatchesMatcheduserId
    }
  }
`;
export const listUserMatches = /* GraphQL */ `
  query ListUserMatches(
    $filter: ModelUserMatchesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        user {
          id
          name
          dob
          bio
          gender
          phoneNumber
          description
          createdAt
          updatedAt
        }
        matcheduser {
          id
          name
          dob
          bio
          gender
          phoneNumber
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userMatchesMatcheduserId
      }
      nextToken
    }
  }
`;
