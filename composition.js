const developer = name => ({
  canCode: () => console.log(`${name} can code`)
});

const reviewer = name => ({
  canReview: () => console.log(`${name} can review your code`)
});

const mentor = name => ({
  canMentor: () => console.log(`${name} can mentor you`)
});

const lead = name => ({
  canLead: () => console.log(`${name} can lead the team`),
  ...developer(name),
  ...reviewer(name),
  ...mentor(name)
});

const middle = name => ({
  ...developer(name),
  ...mentor(name)
});

const dev = middle('Dev');
dev.canMentor();
dev.canCode();

const dev2 = lead('Lead');
dev2.canReview();
dev2.canLead();
dev2.canCode();
