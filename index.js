module.exports = robot => {
  robot.on('issues.opened', check)
  async function check (context) {
    await context.github.issues.addLabels(context.issue({ labels: ['needs-response'] }))
  }
}
