
import styled from '@emotion/styled';

export const FriendsList = styled.ul`
list-style: none;
margin-left: 0px;
padding-left: 0px;
`;

export const FriendsListItem = styled.li`
width: 300px;
margin-left: 0px;
padding-left: 0px;
display: flex;
align-items: center;
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
background-color: #faf6ab;
`;

export const FriendsItemStatus = styled.span`
width: 24px;
height: 24px;
border-radius: 50%;
background-color: ${p => (p.isOnline ? 'red' : 'green')};
display: inline-block;

`;

export const FriendsItemPhoto = styled.img`
margin-left: 20px;
`;

export const FriendsItemName = styled.p`
margin-left: 20px;
font-size: 24px;
margin: 10px 10px 10px 20px;
`;