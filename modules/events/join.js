module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "𝕏𝕚𝕟 ℂ𝕙𝕒̀𝕠, 𝕞𝕚̀𝕟𝕙 𝕝𝕒̀ 𝔹𝕆𝕋 𝘾𝙀𝘾𝙆🐥, 𝐠𝐨̃ /𝐡𝐞𝐥𝐩 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐚𝐥𝐥 𝐥𝐞̣̂𝐧𝐡 𝐜𝐮̉𝐚 𝐁𝐎𝐓. \n𝘽𝙊𝙏 𝙣𝙖̀𝙮 𝙙𝙪̛𝙤̛̣𝙘 𝙡𝙖̣̂𝙥 𝙧𝙖 𝙫𝙤̛́𝙞 𝙢𝙪̣𝙘 𝙙𝙞́𝙘𝙝 𝙘𝙝𝙤 𝙌𝙏𝙑 𝙠𝙞𝙚̂̉𝙢 𝙨𝙤𝙖́𝙩 𝙩𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙫𝙖̀ 𝙢𝙚𝙢 𝙩𝙧𝙤𝙣𝙜 𝙗𝙤𝙭 \n𝐗𝐢𝐧 𝐁𝐎𝐓 𝐢𝐛 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/cwh8110. \n𝙑𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙢𝙚𝙢 𝙩𝙧𝙤𝙣𝙜 𝙗𝙤𝙭 𝘾𝙀𝘾𝙆🐥, 𝙠𝙝𝙤̂𝙣𝙜 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 𝙫𝙤̛́𝙞 𝙢𝙪̣𝙘 𝙙𝙞́𝙘𝙝 𝙨𝙥𝙖𝙢 𝙝𝙖𝙮 𝙢𝙞𝙣𝙞𝙜𝙖𝙢𝙚 ! \n𝐏𝐥𝐞𝐚𝐬𝐞 𝐮𝐬𝐞 𝐛𝐨𝐭. 𝐓𝐡𝐚𝐧𝐤" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`𝕏𝕚𝕟 ℂ𝕙𝕒̀𝕠, 𝕞𝕚̀𝕟𝕙 𝕝𝕒̀ 𝔹𝕆𝕋 𝘾𝙀𝘾𝙆🐥, 𝐠𝐨̃ /𝐡𝐞𝐥𝐩 𝐝𝐞̂̉ 𝐱𝐞𝐦 𝐚𝐥𝐥 𝐥𝐞̣̂𝐧𝐡 𝐜𝐮̉𝐚 𝐁𝐎𝐓. \n𝘽𝙊𝙏 𝙣𝙖̀𝙮 𝙙𝙪̛𝙤̛̣𝙘 𝙡𝙖̣̂𝙥 𝙧𝙖 𝙫𝙤̛́𝙞 𝙢𝙪̣𝙘 𝙙𝙞́𝙘𝙝 𝙘𝙝𝙤 𝙌𝙏𝙑 𝙠𝙞𝙚̂̉𝙢 𝙨𝙤𝙖́𝙩 𝙩𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙫𝙖̀ 𝙢𝙚𝙢 𝙩𝙧𝙤𝙣𝙜 𝙗𝙤𝙭 \n𝐗𝐢𝐧 𝐁𝐎𝐓 𝐢𝐛 𝐀𝐝𝐦𝐢𝐧: https://www.facebook.com/cwh8110. \n𝙑𝙪𝙞 𝙡𝙤̀𝙣𝙜 𝙢𝙚𝙢 𝙩𝙧𝙤𝙣𝙜 𝙗𝙤𝙭 𝘾𝙀𝘾𝙆🐥, 𝙠𝙝𝙤̂𝙣𝙜 𝙨𝙪̛̉ 𝙙𝙪̣𝙣𝙜 𝙫𝙤̛́𝙞 𝙢𝙪̣𝙘 𝙙𝙞́𝙘𝙝 𝙨𝙥𝙖𝙢 𝙝𝙖𝙮 𝙢𝙞𝙣𝙞𝙜𝙖𝙢𝙚 ! \n𝐏𝐥𝐞𝐚𝐬𝐞 𝐮𝐬𝐞 𝐛𝐨𝐭. 𝐓𝐡𝐚𝐧𝐤`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinMp4");
			const pathGif = join(path,`hi.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "𝘾𝙝𝙖̀𝙤 𝙗𝙚́ 𝙢𝙚𝙢 𝙢𝙤̛́𝙞 𝙘𝙤́ 𝙩𝙚̂ {name}.\n 𝘿𝙖̃ 𝙩𝙤̛́𝙞 𝙫𝙤̛́𝙞 𝘽𝙤𝙭 {threadName}.\n{type} 𝙇𝙖̀ 𝙘𝙪̣𝙘 𝙘𝙪̛𝙣𝙜 𝙩𝙝𝙪̛́ {soThanhVien} 𝘾𝙪̉𝙖 𝘽𝙝𝙖𝙣 🥲" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}