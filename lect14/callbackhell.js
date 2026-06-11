// // give me example of callback hell in nodejs

// function loginUser(callback) {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback({ id: 1, name: "John Doe" });
//   }, 2000);
// }

// function getPost(userId, callback) {
//   setTimeout(() => {
//     console.log(`Fetching post for user ${userId}`);
//     callback({ id: 101, title: "Post Title" });
//   }, 3000);
// }

// function getComments(postId, callback) {
//   setTimeout(() => {
//     console.log(`Fetching comments for post ${postId}`);
//     callback(["Comment 1", "Comment 2", "Comment 3"]);
//   }, 2000);
// }

// loginUser(function (user) {
//   getPost(user.id, function (post) {
//     getComments(post.id, function (comments) {
//       console.log("Comments:", comments);
//     });
//   });
// });

// example with 5 levels of nesting

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 1000);
}

function step4(callback) {
  setTimeout(() => {
    console.log("Step 4 complete");
    callback();
  }, 1000);
}

function step5(callback) {
  setTimeout(() => {
    console.log("Step 5 complete");
    callback();
  }, 1000);
}

step1(function () {
  step2(function () {
    step3(function () {
      step4(function () {
        step5(function () {
          console.log("All steps complete");
        });
      });
    });
  });
});
