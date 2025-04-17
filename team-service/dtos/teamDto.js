export const teamDto = (team) => {
  return {
    id: team._id,
    type: team.type,
    availability: team.availability,
    createdAt: team.createdAt,
    updatedAt: team.updatedAt,
  };
};
