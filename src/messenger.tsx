import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import NavbarItem from './components/NavbarItem/NavbarItem';
import Panel from './components/Panel/Panel';
import Root from './components/Root/Root';
import View from './components/View/View';

import './style.css';

const initPath = location.pathname.slice(1) || 'chats';

function Messenger() {
	const [activeView, setActiveView] = useState<string>(initPath);
	const go = (path: string) => {
		history.pushState({}, '', '/' + path);
		setActiveView(path);
	};

	useEffect(() => {
		window.addEventListener('popstate', () => {
			setActiveView(location.pathname.slice(1));
		});
	}, []);

	return (
		<Root 
			activeView={activeView}
			navbar={
				<Navbar>
					<NavbarItem 
						text="Новости"
						active={activeView === 'news'}
						onClick={() => go('news')}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="newsfeed_28">
							<path d="M19.98 3C22.2 3 24 4.8 24 7.02v13.96C24 23.2 22.2 25 19.98 25H8.02A4.02 4.02 0 014 20.98V7.02C4 4.8 5.8 3 8.02 3h11.96zm.01 2H8.01C6.9 5 6 5.9 6 7.01v13.98C6 22.1 6.9 23 8.01 23h11.98c1.11 0 2.01-.9 2.01-2.01V7.01C22 5.9 21.1 5 19.99 5zm-.995 6c.555 0 1.005.45 1.005 1.005v7.99C20 20.55 19.55 21 18.995 21h-9.99C8.45 21 8 20.55 8 19.995v-7.99C8 11.45 8.45 11 9.005 11h9.99zM15 7a1 1 0 110 2H9a1 1 0 010-2h6z" fill="currentColor" />
						</svg>
					</NavbarItem>
					<NavbarItem 
						text="Друзья"
						active={activeView === 'friends'}
						onClick={() => go('friends')}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="users_outline_28">
							<g fill="none" fillRule="evenodd">
								<path d="M0 0h28v28H0z"/>
								<path d="M9 15c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H3.647c-1.458 0-2.147-.797-2.147-2.571C1.5 16.542 5.003 15 9 15zm10.5 0c3.997 0 7.5 1.542 7.5 4.929 0 1.774-.69 2.571-2.147 2.571H19a1 1 0 010-2h5.913a.83.83 0 01.042.002l.013.001.002-.015c.01-.081.024-.22.029-.427l.001-.132C25 18.095 22.513 17 19.5 17c-.428 0-.898.03-1.37.09a1 1 0 11-.256-1.983A12.87 12.87 0 0119.5 15zM9 17c-3.013 0-5.5 1.095-5.5 2.929 0 .28.017.462.03.56l.001.014.014-.001.019-.001h10.891l.013.002.002-.015c.013-.097.03-.28.03-.56C14.5 18.096 12.013 17 9 17zM19.5 5a4.25 4.25 0 014.25 4.25 4.25 4.25 0 01-4.25 4.25 4.25 4.25 0 01-4.25-4.25A4.25 4.25 0 0119.5 5zM9 5a4.25 4.25 0 014.25 4.25A4.25 4.25 0 019 13.5a4.25 4.25 0 01-4.25-4.25A4.25 4.25 0 019 5zm10.5 2a2.25 2.25 0 100 4.5 2.25 2.25 0 100-4.5zM9 7a2.25 2.25 0 100 4.5A2.25 2.25 0 109 7z" fill="currentColor" fillRule="nonzero" />
							</g>
						</svg>
					</NavbarItem>
					<NavbarItem 
						text="Сообщения" 
						active={activeView === 'chats'}
						counter={<Counter>{'3'}</Counter>}
						onClick={() => go('chats')}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="messages_28">
							<g fill="none" fillRule="evenodd">
								<path d="M0 0h28v28H0z" />
								<path d="M14 3.5c6.32 0 11.5 4.44 11.5 10s-5.18 10-11.5 10c-1.355 0-2.678-.204-3.924-.597-1.402 1.306-3.458 1.994-6.124 2.098a1.434 1.434 0 01-1.363-2.023c.911-2.015 1.413-3.498 1.514-4.379C3.062 17.073 2.5 15.323 2.5 13.5c0-5.56 5.18-10 11.5-10zm0 2c-5.278 0-9.5 3.619-9.5 8 0 1.508.497 2.955 1.426 4.213a1 1 0 01.196.598c-.004 1.047-.45 2.567-1.33 4.627 1.987-.208 3.388-.831 4.245-1.837a1 1 0 011.111-.287c1.202.45 2.506.686 3.852.686 5.278 0 9.5-3.619 9.5-8s-4.222-8-9.5-8z" fill="currentColor" fillRule="nonzero" />
							</g>
						</svg>
					</NavbarItem>
					<NavbarItem 
						text="Профиль"
						active={activeView === 'profile'}
						onClick={() => go('profile')}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_circle_outline_28">
							<g fill="none" fillRule="evenodd">
								<path d="M0 0h28v28H0z" />
								<path d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 18.5c-2.086 0-4.08.582-5.797 1.649A9.952 9.952 0 0014 24c2.16 0 4.161-.685 5.796-1.85A10.94 10.94 0 0014 20.5zM14 4C8.477 4 4 8.477 4 14a9.964 9.964 0 002.648 6.779A12.934 12.934 0 0114 18.5c2.67 0 5.215.808 7.353 2.277A9.962 9.962 0 0024 14c0-5.523-4.477-10-10-10zm0 3.5a4.749 4.749 0 014.75 4.75A4.749 4.749 0 0114 17a4.749 4.749 0 01-4.75-4.75A4.749 4.749 0 0114 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z" fill="currentColor" fillRule="nonzero" />
							</g>
						</svg>
					</NavbarItem>
					<NavbarItem 
						text="Настройки"
						active={activeView === 'settings'}
						onClick={() => go('settings')}
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="settings_outline_28">
							<g fillRule="nonzero" fill="none">
								<path d="M0 0h28v28H0z"/>
								<path d="M15.148 2.04c.428.07.832.233 1.195.523.595.476.878 1.076 1.097 1.952.056.224.153.486.275.74.278.117.55.249.815.393.262-.065.513-.15.714-.244 1.412-.658 2.597-.623 3.567.423.082.089.131.148.238.28l.629.776c.17.21.241.305.348.482.692 1.152.422 2.224-.452 3.386a4.112 4.112 0 00-.417.71c.078.283.143.57.195.86.222.178.46.334.668.441.804.41 1.325.821 1.655 1.508.202.42.27.85.24 1.282a3.48 3.48 0 01-.106.64l-.225.975c-.065.285-.099.41-.185.622a2.515 2.515 0 01-.778 1.047c-.598.473-1.246.614-2.148.63-.229.004-.502.04-.773.1-.177.243-.364.478-.563.704.003.275.03.544.077.764.187.884.196 1.547-.13 2.236-.2.42-.491.744-.845.993a3.48 3.48 0 01-.565.32l-.899.44a3.48 3.48 0 01-.6.247c-.414.126-.85.156-1.303.054-.744-.167-1.261-.582-1.842-1.273a4.103 4.103 0 00-.591-.561 9.627 9.627 0 01-.878 0c-.228.18-.437.378-.591.56-.58.692-1.098 1.107-1.842 1.274a2.515 2.515 0 01-1.303-.054 3.48 3.48 0 01-.6-.248l-.899-.438a7.152 7.152 0 01-.185-.093c-1.312-.683-1.696-1.847-1.355-3.457.047-.22.074-.49.077-.764a9.535 9.535 0 01-.563-.705 4.066 4.066 0 00-.773-.099c-.902-.016-1.55-.157-2.148-.63a2.515 2.515 0 01-.778-1.047 3.48 3.48 0 01-.185-.622l-.225-.974a3.381 3.381 0 01-.109-.681 2.509 2.509 0 01.296-1.346c.339-.629.84-1.015 1.602-1.404a4.09 4.09 0 00.668-.441c.052-.29.117-.577.195-.86a4.112 4.112 0 00-.417-.71c-.874-1.162-1.144-2.234-.452-3.386.107-.177.179-.273.348-.482l.63-.777c.106-.131.155-.19.237-.279.97-1.046 2.155-1.08 3.567-.423.201.093.452.18.714.244.265-.144.537-.276.815-.394.122-.253.219-.515.275-.74.219-.875.502-1.475 1.097-1.95.363-.291.767-.455 1.195-.523.18-.03.3-.038.49-.04L14.5 2c.292 0 .422.005.648.04zM14.586 4H13.5c-.5 0-.75 0-1 1a6.347 6.347 0 01-.836 1.87 7.47 7.47 0 00-1.8.872 6.35 6.35 0 01-1.952-.525c-.934-.435-1.092-.24-1.406.148l-.63.777c-.314.389-.472.583.148 1.406.35.464.721 1.15.937 1.857a7.458 7.458 0 00-.429 1.894 6.345 6.345 0 01-1.643 1.245c-.918.468-.862.712-.75 1.199l.225.974c.113.487.169.731 1.2.75.57.01 1.323.135 2.003.39.345.575.765 1.1 1.247 1.56a6.35 6.35 0 01-.072 2.032c-.213 1.008.011 1.118.46 1.337l.9.439c.449.219.674.328 1.337-.46a6.343 6.343 0 011.59-1.327 7.571 7.571 0 001.942 0 6.343 6.343 0 011.59 1.326c.663.79.888.68 1.337.46l.9-.438c.449-.219.673-.329.46-1.337a6.35 6.35 0 01-.072-2.031 7.533 7.533 0 001.247-1.56 6.348 6.348 0 012.003-.391c1.031-.019 1.087-.263 1.2-.75l.225-.974c.112-.487.168-.73-.75-1.2a6.345 6.345 0 01-1.643-1.244 7.458 7.458 0 00-.43-1.894 6.342 6.342 0 01.938-1.857c.62-.823.462-1.017.148-1.406l-.63-.777c-.314-.389-.472-.583-1.406-.148a6.35 6.35 0 01-1.952.525 7.47 7.47 0 00-1.8-.871A6.347 6.347 0 0115.5 5c-.235-.941-.47-.997-.914-1zM14 9.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="currentColor"/>
							</g>
						</svg>
					</NavbarItem>
				</Navbar>
			}
		>
			<View id="news">
				<Panel>
					<div>news</div>
				</Panel>
			</View>
			<View id="friends">
				<Panel>
					<div>friends</div>
				</Panel>
			</View>
			<View id="chats">
				<Panel title="Сообщения" >
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sit ratione libero nesciunt aliquam fugit vero nihil, molestias earum culpa doloremque consequuntur asperiores corporis porro maxime accusantium? Ipsum sequi ratione tempore impedit sunt tenetur porro? Cum aspernatur, ducimus qui, ex facilis sit voluptatum modi voluptatibus quasi nam officia incidunt id recusandae repellat optio explicabo harum ipsum, natus delectus accusantium ut. Corrupti neque dolores facilis laborum accusamus amet sint dignissimos excepturi sunt soluta odit ab, accusantium aspernatur asperiores architecto quod, ut optio aliquid! Pariatur non iure modi aliquam in provident. Nihil amet in incidunt! Delectus voluptatibus, minus reprehenderit ipsam voluptate, ea sapiente molestiae quasi debitis laboriosam adipisci dolores fuga esse excepturi corporis aliquam dignissimos praesentium quibusdam voluptatem amet eveniet unde in. Deleniti nemo delectus illum sed amet dolor facilis debitis odio quod quam quae aut alias repellat qui blanditiis, ab, magni voluptatibus dolorum deserunt eius. Inventore, repudiandae incidunt. Voluptas doloremque amet odit, excepturi earum temporibus dolore sapiente quasi! Saepe molestiae placeat eius, nulla vel reiciendis rem distinctio voluptatibus doloremque eum neque quae sint ad provident libero inventore quibusdam nemo rerum numquam laboriosam! Ipsa repellendus molestias neque, eaque id atque velit quia modi animi cumque voluptatem quaerat illo aliquid in maiores laborum consequuntur esse ratione explicabo sed similique? Fugiat voluptatem totam quidem quo ducimus quam dolorem eveniet dolores mollitia alias magnam et nam recusandae voluptas ratione dolorum quisquam architecto voluptatum rerum, molestiae sunt laudantium laboriosam laborum. Ad, sed architecto? Quidem esse autem reiciendis accusamus blanditiis illum assumenda iusto neque illo nulla deserunt voluptas ut quisquam cum officiis perferendis ipsa facilis suscipit corrupti libero animi, aliquid, ipsam ducimus vitae. Expedita eligendi perferendis unde qui commodi quaerat culpa minima. Dolorem doloremque adipisci voluptas eum praesentium, possimus voluptatum aliquam optio ipsum aperiam id, vero eligendi suscipit cum alias odio assumenda soluta sequi odit quis ipsam excepturi. Reiciendis debitis autem eveniet nihil dolor minima officia assumenda, dolorum ipsam placeat distinctio repellendus veritatis nesciunt eligendi harum iure magni. Veniam repellat eos vel minus adipisci, quibusdam beatae earum quod numquam ratione, atque voluptas assumenda, accusamus non cupiditate soluta doloribus dolorum est esse modi! A earum cumque recusandae deleniti nihil est iusto iure beatae debitis nemo eum, dolores, quam provident nesciunt, quisquam ipsam saepe dolore obcaecati aliquam blanditiis aliquid excepturi. Necessitatibus odit accusamus maiores, beatae aperiam dolorum amet, deserunt rem repellendus mollitia, et velit numquam quidem eaque doloremque assumenda quaerat dignissimos delectus corporis nulla maxime praesentium? Iusto et asperiores, quidem atque est nihil expedita optio natus, facere molestiae, quasi excepturi quis? Vero in quod praesentium a veniam amet alias eos provident neque reiciendis, repudiandae sunt commodi earum autem id dignissimos nostrum quam libero fugit totam debitis maxime. Asperiores soluta facilis architecto eveniet similique perferendis aut quasi adipisci vel expedita, qui fugit delectus! Vel est placeat voluptatum quisquam. Obcaecati temporibus quaerat eligendi eius veniam quod consequuntur adipisci reprehenderit quis itaque? Dolorum inventore modi rerum facere labore itaque repellendus recusandae ipsam impedit dignissimos deleniti officia doloremque vitae maiores similique nostrum porro voluptate laboriosam, laudantium soluta hic eum. Quam voluptatem placeat libero!
				</Panel>
			</View>
			<View id="profile">
				<Panel>
					<div>profile</div>
				</Panel>
			</View>
			<View id="settings">
				<Panel>
					<div>settings</div>
				</Panel>
			</View>
		</Root>
	);
}

ReactDOM.render(
	<Messenger />,
	document.getElementById('root')
);