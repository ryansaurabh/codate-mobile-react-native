/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserMatches = /* GraphQL */ `
  subscription OnCreateUserMatches {
    onCreateUserMatches {
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
export const onUpdateUserMatches = /* GraphQL */ `
  subscription OnUpdateUserMatches {
    onUpdateUserMatches {
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
export const onDeleteUserMatches = /* GraphQL */ `
  subscription OnDeleteUserMatches {
    onDeleteUserMatches {
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
