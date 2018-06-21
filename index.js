module.exports = app => {
  robot.on('issues.opened', check)
  async function check (context) {
    await github.issues.addLabels(context.issue({ labels: ['needs-response'] }))
  }
}
