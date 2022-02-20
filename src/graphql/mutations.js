/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserMatches = /* GraphQL */ `
  mutation CreateUserMatches(
    $input: CreateUserMatchesInput!
    $condition: ModelUserMatchesConditionInput
  ) {
    createUserMatches(input: $input, condition: $condition) {
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
export const updateUserMatches = /* GraphQL */ `
  mutation UpdateUserMatches(
    $input: UpdateUserMatchesInput!
    $condition: ModelUserMatchesConditionInput
  ) {
    updateUserMatches(input: $input, condition: $condition) {
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
export const deleteUserMatches = /* GraphQL */ `
  mutation DeleteUserMatches(
    $input: DeleteUserMatchesInput!
    $condition: ModelUserMatchesConditionInput
  ) {
    deleteUserMatches(input: $input, condition: $condition) {
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
