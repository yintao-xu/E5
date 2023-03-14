exports.methodTimeout = 1000 * 10;  // 10s
exports.totalTimeout = exports.methodTimeout * 18; // 3min

exports.fatalError = (username, error) => {
  console.error(
    `✘ 账号 [${username}] 注册失败, 请按照链接说明关闭多因素认证：`,
    "https://docs.microsoft.com/zh-cn/azure/active-directory/fundamentals/concept-fundamentals-security-defaults#disabling-security-defaults",
    error
  );
  process.exit(1);
};
